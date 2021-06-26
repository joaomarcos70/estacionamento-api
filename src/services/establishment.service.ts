import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Establishment } from './../models/establishment.model';

@Injectable()
export class EstablishmentService {
    constructor(
        @InjectModel(Establishment)
        private establishmentModel: typeof Establishment,
      ) {}

    async getAll(): Promise<Establishment[]>{
        return await this.establishmentModel.findAll();
    }

    async getEstablishment(id: number): Promise<Establishment>{
        return await this.establishmentModel.findByPk(id);
    }

    async createEstablishment(establishment:Establishment){
        
        return await this.establishmentModel.create(establishment);

    }

    async updateEstablishment(establishment:Establishment, id: number){
        await this.establishmentModel.update(establishment, {
            where:{
                id: id,
            }
        })
        return {
            message:'atualizado com sucesso'
        };
    }

    async deleteEstablishment(id: number){
        const establishment = await this.getEstablishment(id)

        await establishment.destroy()

            return {
                message:'apagado com sucesso'
        }
    }
}