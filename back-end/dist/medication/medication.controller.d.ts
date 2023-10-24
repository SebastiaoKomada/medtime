import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';
import { MedicationEntity } from './entities/medication.entity';
import { MedicationService } from './medication.service';
import { ReturnMedicationDto } from './dtos/returnMedication.dto';
export declare class MedicationController {
    private readonly medicationService;
    private readonly profileIdService;
    constructor(medicationService: MedicationService, profileIdService: ProfileIdService);
    getMedicationByIdUsingRelations(medId: number): Promise<ReturnMedicationDto>;
    gettAllMedicationByPerId(medPerId: number): Promise<MedicationEntity[]>;
    createMedicationAndTimes(data: {
        medication: MedicationEntity;
        horarios: string[];
    }, userId: number): Promise<import("./dtos/returnMedicationWithTimes.dto").ReturnMedicationWithTimesDto>;
}
