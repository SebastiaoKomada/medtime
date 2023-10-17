import { MedicationService } from '../medication/medication.service';
import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import {ConfirmationEntity } from './entities/confirmation.entity';
import { CreateConfirmationDto } from './dtos/createConfirmation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileService } from 'src/profile/profile.service';
import { Repository } from 'typeorm';
import { TimeService } from 'src/time/time.service';

@Injectable()
export class ConfirmationService {
    constructor(
        @InjectRepository(ConfirmationEntity)
        private readonly confirmationRepository: Repository<ConfirmationEntity>,
        private readonly medicationService: MedicationService,
        private readonly timeService: TimeService


    ) { }


    async confirmMedication(createConfirmationDto: CreateConfirmationDto, conPerId: number, conMedId: number, conHorId: number): Promise<ConfirmationEntity>{
        
        const medication = await this.medicationService.findMedicationById(conMedId)
        const time = await this.timeService.findTimeById(conHorId)

        return this.confirmationRepository.save({
            ...createConfirmationDto,
            conPerId,
            conMedId,
            conHorId
        })
    }

}
