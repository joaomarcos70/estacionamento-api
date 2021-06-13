import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table
export class Establishment extends Model{

    @Column({
        type: DataType.STRING(40),
        allowNull: false,  
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    adress: string;

    @Column({
        type: DataType.STRING(12),
        allowNull: false,  
    })
    numberPhone: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,  
    })
    motorcycleVacancy: number;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,  
    })
    carVacancy: number;

}