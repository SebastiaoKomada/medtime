import { CreateConfirmationDto } from './dtos/createConfirmation.dto';
import { ConfirmationService } from './confirmation.service';
import { ConfirmationEntity } from './entities/confirmation.entity';
import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';
export declare class ConfirmationController {
    private readonly confirmationService;
    private readonly profileIdService;
    constructor(confirmationService: ConfirmationService, profileIdService: ProfileIdService);
    confirmMedication(createConfirmationDto: CreateConfirmationDto, conPerId: number, conMedId: number, conHorId: number): Promise<ConfirmationEntity>;
}
