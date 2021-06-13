
export class Establishment{
    id: number;
    name: string;
    adress: string;
    numberPhone: string;
    motorcycleVacancy: number;
    carVacancy: number;

    constructor(name:string, adress: string, numberPhone: string, motorcycleVacancy: number, carVacancy: number){
        this.name = name;
        this.adress = adress;
        this.numberPhone = numberPhone,
        this.motorcycleVacancy = motorcycleVacancy,
        this.carVacancy = carVacancy
    }
}