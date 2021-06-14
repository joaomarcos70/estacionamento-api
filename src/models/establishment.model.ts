import { Address } from './address.model';
import { Table, Model, Column, DataType, HasOne, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Establishment extends Model<Establishment> {

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

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

  @HasOne(() => Address)
  addresses: Address[];

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
}
