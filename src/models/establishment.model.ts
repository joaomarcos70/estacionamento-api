import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'Establishment',
})
export class Establishment extends Model {
  // id pode ser omitido
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;

  @Column
  nome!: string;

  @Column
  adress!: number;

  @Column
  numberPhone!: string;

  @Column
  motorcycleVacancy!: number;

  @Column
  carVacancy!: number;
}
