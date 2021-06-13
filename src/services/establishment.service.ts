import { Injectable } from '@nestjs/common';
import { Establishment } from './../models/establishment.model';

@Injectable()
export class EstablishmentService {
    establishment: Establishment[] = [
        /* new Establishment('mini mercado cuca', 'rua dos bobo', '13982184930',10, 10),
        new Establishment('hyunday', 'rua dos bobo', '13932484930',20, 10),
        new Establishment('bmw', 'rua dos loco', '13982334930',5, 8) */
    ];

    getAll(): Establishment[]{
        return this.establishment;
    }

    getEstablishment(id: number): Establishment{
        return this.establishment[0];
    }

    createEstablishment(establishment:Establishment){
        this.establishment.push(establishment);
    }

    updateEstablishment(establishment:Establishment): Establishment{
        return establishment;
    }

    deleteEstablishment(id: number){
        this.establishment.pop();
    }
}