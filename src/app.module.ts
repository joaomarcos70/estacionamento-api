import { EstablishmentService } from 'src/services/establishment.service';
import { EstablishmentController } from './controllers/establishment.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EstablishmentController],
  providers: [AppService, EstablishmentService],
})
export class AppModule {}
