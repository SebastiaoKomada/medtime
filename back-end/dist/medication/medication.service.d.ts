import { Repository } from 'typeorm';
import { MedicationEntity } from './entities/medication.entity';
import { TimeEntity } from 'src/time/entities/time.entity';
import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';
import { ReturnMedicationWithTimesDto } from './dtos/returnMedicationWithTimes.dto';
export declare class MedicationService {
    private readonly medicationRepository;
    private readonly timeRepository;
    private readonly profileIdService;
    constructor(medicationRepository: Repository<MedicationEntity>, timeRepository: Repository<TimeEntity>, profileIdService: ProfileIdService);
    gettAllMedicationByPerId(medPerId: number): Promise<MedicationEntity[]>;
    findMedicationById(medId: number): Promise<MedicationEntity>;
    getMedicationByIdUsingRelations(medId: number): Promise<MedicationEntity>;
    createMedicationAndTimes(medication: MedicationEntity, horarios: string[], userId: number): Promise<ReturnMedicationWithTimesDto>;
}
