import { MedicationEntity } from "src/medication/entities/medication.entity";
export declare class ConfirmationEntity {
    conId: number;
    conPerId: number;
    conMedId: number;
    conHorId: number;
    conData: Date;
    medication?: MedicationEntity;
    times?: MedicationEntity;
}
