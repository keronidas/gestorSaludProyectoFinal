import { SesionModel } from "./sesionModel";

export interface FacturasModel {
    id: string;
    code: string;
    date: Date;
    paid: boolean;
    discount: number;
    amount: number;
    sesiones: SesionModel[];
}