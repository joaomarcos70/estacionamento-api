import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Establishment } from "src/models/establishment.model";
import { EstablishmentService } from "src/services/establishment.service"

@Controller('establishment')

export class EstablishmentController{
    constructor( private establishmentService: EstablishmentService){

    }


    @Post()
    createEstablishment(@Body() establishment: Establishment){
        establishment.id = 100;
        this.establishmentService.createEstablishment(establishment);
    }

    @Get()
    getAllEstablishment(): Establishment[]{
        return this.establishmentService.getAll();
    }

    @Get(':id')
    getEstablishment(@Param() params): Establishment{
        return this.establishmentService.getEstablishment(params.id);
    }

    @Put()
    updateEstablishment(@Body() establishment :Establishment): Establishment{
        return this.updateEstablishment(establishment);
    }

    @Delete(':id')
    deleteEstablishment(@Param()params){
        this.establishmentService.deleteEstablishment(params.id);
    }
}