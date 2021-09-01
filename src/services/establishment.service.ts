import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from 'src/models/address.model';
import { Establishment } from './../models/establishment.model';

@Injectable()
export class EstablishmentService {
    constructor(
        @InjectModel(Establishment)
        private establishmentModel: typeof Establishment,
        @InjectModel(Address)
        private addressModel: typeof Address,
      ) {}

    async getAll(): Promise<Establishment[]>{
        return await this.establishmentModel.findAll();
    }

    async getEstablishment(id: number): Promise<Establishment>{
        return await this.establishmentModel.findByPk(id);
    }

    async createEstablishment(establishment:Establishment){
        try {
            const address = await this.addressModel.create(establishment.addresses)
            console.log(address.id);
            establishment.addressId = address.id

            await this.establishmentModel.create(establishment);
            return {status: HttpStatus.CREATED, message:'Estabelecimetno criado com sucesso!'}
        } catch (error: any) {
            return {error: error.message}
        }

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