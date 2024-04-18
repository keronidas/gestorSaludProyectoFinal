import { PacienteModel } from "./pacienteModel";
import { ProfesionalModel } from "./profesionalModel";
import { SalaTratamientoModel } from "./salaTratamientoModel";

export interface SesionDto {
    id: string;
    profesional: ProfesionalModel;
    paciente: PacienteModel;
    salas: SalaTratamientoModel;
    fecha: Date;
    motivo: string;
    diagnostico: string;
    tratamiento: string;
    precio: number;
    descuento: number;
    finalPrice: number;
}