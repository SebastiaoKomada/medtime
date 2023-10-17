import { MedicationService } from '../medication/medication.service';
import { ConfirmationEntity } from './entities/confirmation.entity';
import { CreateConfirmationDto } from './dtos/createConfirmation.dto';
import { Repository } from 'typeorm';
import { TimeService } from 'src/time/time.service';
export declare class ConfirmationService {
    private readonly confirmationRepository;
    private readonly medicationService;
    private readonly timeService;
    constructor(confirmationRepository: Repository<ConfirmationEntity>, medicationService: MedicationService, timeService: TimeService);
    confirmMedication(createConfirmationDto: CreateConfirmationDto, conPerId: number, conMedId: number, conHorId: number): Promise<ConfirmationEntity>;
}
