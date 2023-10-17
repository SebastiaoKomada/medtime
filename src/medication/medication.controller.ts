import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Repository, Transaction, getRepository } from 'typeorm';
import { MedicationEntity } from './entities/medication.entity';
import { CreateMedicationDto } from './dtos/createMedication.dto';
import { MedicationService } from './medication.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user.enum';
import { ReturnTimeDto } from 'src/time/dtos/returnTime.dto';
import { ReturnMedicationDto } from './dtos/returnMedication.dto';
import { TimeEntity } from 'src/time/entities/time.entity';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('medication')
export class MedicationController {
  constructor(
    private readonly medicationService: MedicationService,
  ) {}

  // @UsePipes(ValidationPipe)
  // @Post()
  // async createMedication(@Body() CreateMedicacaoDto: CreateMedicationDto, @Param('medPerId') medPerId: number): Promise<MedicationEntity> {
  //     const newMedPerId = this.profileIdService.getProfileId();
  //     return this.medicationService.createMedication(CreateMedicacaoDto, newMedPerId)
  // }

  @Get('/:medId')
  async getUserById(
    @Param('medId') medId: number,
  ): Promise<ReturnMedicationDto> {
    return new ReturnMedicationDto(
      await this.medicationService.getMedicationByIdUsingRelations(medId),
    );
  }

  @Post('create')
  async createMedicationAndTimes(
    @Body() data: {
      medication: MedicationEntity;
      horarios: string[];
    },
    @UserId() userId: number
  ) {
    const result = await this.medicationService.createMedicationAndTimes(data.medication, data.horarios, userId);
    return result;
  }
}
