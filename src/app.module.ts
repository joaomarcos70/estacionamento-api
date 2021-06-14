import { EstablishmentService } from 'src/services/establishment.service';
import { EstablishmentController } from './controllers/establishment.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Establishment } from './models/establishment.model';
import { Address } from './models/address.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'parking',
      autoLoadModels: true,
      synchronize: true,
    }),

    SequelizeModule.forFeature([Establishment, Address]),
  ],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
})
export class AppModule {}
