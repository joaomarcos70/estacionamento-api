import { Address } from './address.model';
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Establishment extends Model<Establishment> {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(40),
    allowNull: false,
  })
  name: string;

    @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  cnpj: string;

  @Column({
    type: DataType.STRING(12),
    allowNull: false,
  })
  numberPhone: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  motorcycleVacancy: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  carVacancy: number;

  @ForeignKey(()=>Address)
  @Column({
    type: DataType.INTEGER,
    field:'addressId',
  }) 
    addressId: number;

  @BelongsTo(()=>Address)
    addresses:Address;

}
