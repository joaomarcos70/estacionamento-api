import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Establishment } from "src/models/establishment.model";
import { EstablishmentService } from "src/services/establishment.service"

@Controller('establishment')

export class EstablishmentController{
    constructor( private establishmentService: EstablishmentService){
    }

    @Post()
    createEstablishment(@Body() establishment: Establishment){
    return this.establishmentService.createEstablishment(establishment);

    }

    @Get()
    getAllEstablishment(){
        return this.establishmentService.getAll();
    }

    @Get(':id')
    getEstablishment(@Param() params){
        return this.establishmentService.getEstablishment(params.id);
    }

    @Put()
    updateEstablishment(@Body() establishment :Establishment): Establishment{
        return this.updateEstablishment(establishment);
    }

    @Delete(':id')
    deleteEstablishment(@Param('id')id: number){
        this.establishmentService.deleteEstablishment(id);
    }
}