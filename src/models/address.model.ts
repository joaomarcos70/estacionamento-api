import { Establishment } from 'src/models/establishment.model';
import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";

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

    @HasOne(() => Establishment)
    establishments: Establishment[];
}