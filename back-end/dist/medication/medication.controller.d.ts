import { MedicationEntity } from './entities/medication.entity';
import { MedicationService } from './medication.service';
import { ReturnMedicationDto } from './dtos/returnMedication.dto';
export declare class MedicationController {
    private readonly medicationService;
    constructor(medicationService: MedicationService);
    getUserById(medId: number): Promise<ReturnMedicationDto>;
    createMedicationAndTimes(data: {
        medication: MedicationEntity;
        horarios: string[];
    }, userId: number): Promise<import("./dtos/returnMedicationWithTimes.dto").ReturnMedicationWithTimesDto>;
}
