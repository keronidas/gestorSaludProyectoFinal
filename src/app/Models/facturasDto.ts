import { SesionModel } from "./sesionModel";

export interface facturasDto {
    discount: number;
    paid: boolean;
    sesiones:SesionModel[];
}