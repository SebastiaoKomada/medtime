import { ConfirmationEntity } from "src/confirmation/entities/confirmation.entity";
import { TimeEntity } from "src/time/entities/time.entity";
export declare class MedicationEntity {
    medId: number;
    medNome: string;
    medForma: string;
    medQuantidade: number;
    medDataInicio: string;
    medDataFim: string;
    medPerId: number;
    times?: TimeEntity[];
    confirmation?: ConfirmationEntity[];
}
