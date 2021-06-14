import {Table,Model,Column,DataType,} from 'sequelize-typescript';

@Table
export class Establishment extends Model<Establishment> {

  @Column({
    type: DataType.STRING(40),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  adress: string;

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
