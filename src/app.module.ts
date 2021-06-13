import { EstablishmentService } from 'src/services/establishment.service';
import { EstablishmentController } from './controllers/establishment.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Establishment } from './models/establishment.model';

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
    synchronize:true,
  }),

  SequelizeModule.forFeature([Establishment])
],
  controllers: [AppController, EstablishmentController],
  providers: [AppService, EstablishmentService],
})
export class AppModule {}
