import { OficioModel } from "./oficioModel";

export interface ProfesionalDto {
    creation_date: Date;
    id: String;
    name: String;
    email: String;
    birthdate: Date;
    city: String;
    adress: String;
    number: String;
    salary: number;
    img: String;
    profesion: OficioModel[];
}