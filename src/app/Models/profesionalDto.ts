import { OficioModel } from "./oficioModel";

export interface ProfesionalDto {
    id: String;
    name: String;
    email: String;
    birthdate: Date;
    city: String;
    adress: String;
    number: String;
    salary: Number;
    img: String;
    profesion: OficioModel[];
}