import { Establishment } from 'src/models/establishment.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Address extends Model<Address>{

    @Column({
        type: DataType.CHAR(2),
        allowNull: false,
    })
    state: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    street: string;

    @ForeignKey(()=>Establishment) @Column({
        type: DataType.INTEGER,
        field:'establishment_id',
    }) 
    establishmentId:string;
    
    @BelongsTo(()=>Establishment)
     establishment:Establishment;
}