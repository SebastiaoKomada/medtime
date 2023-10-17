import { TimeEntity } from "src/time/entities/time.entity";
import { MedicationEntity } from "../entities/medication.entity";
export declare class ReturnMedicationWithTimesDto {
    medication: {
        medNome: string;
        medForma: string;
        medQuantidade: number;
        medDataInicio: string;
        medDataFim: string;
        medPerId: number;
        medId: number;
    };
    times: {
        horario: string;
        horPerId: number;
        horUsuId: number;
        horMedId: number;
        horId: number;
    }[];
    constructor(medicationEntity: MedicationEntity, times: TimeEntity[]);
}
