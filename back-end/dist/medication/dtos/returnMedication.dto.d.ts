import { ReturnTimeDto } from 'src/time/dtos/returnTime.dto';
import { MedicationEntity } from '../entities/medication.entity';
export declare class ReturnMedicationDto {
    medId: number;
    medForma: string;
    medQuantidade: number;
    medDataInicio: string;
    medDataFim: string;
    times?: ReturnTimeDto[];
    constructor(medicationEntity: MedicationEntity);
}
