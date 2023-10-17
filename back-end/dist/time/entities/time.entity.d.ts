import { MedicationEntity } from "src/medication/entities/medication.entity";
import { ConfirmationEntity } from "src/confirmation/entities/confirmation.entity";
export declare class TimeEntity {
    horId: number;
    horMedId: number;
    horUsuId: number;
    horPerId: number;
    horario: string;
    created_at: string;
    updated_at: string;
    medication: MedicationEntity;
    confirmation?: ConfirmationEntity[];
}
