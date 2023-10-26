import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,

} from '@nestjs/common';
import { MedicationEntity } from './entities/medication.entity';
import { MedicationService } from './medication.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user.enum';
import { ReturnMedicationDto } from './dtos/returnMedication.dto';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('medication')
export class MedicationController {
  constructor(
    private readonly medicationService: MedicationService,
    private readonly profileIdService: ProfileIdService,
  ) {}

  // @UsePipes(ValidationPipe)
  // @Post()
  // async createMedication(@Body() CreateMedicacaoDto: CreateMedicationDto, @Param('medPerId') medPerId: number): Promise<MedicationEntity> {
  //     const newMedPerId = this.profileIdService.getProfileId();
  //     return this.medicationService.createMedication(CreateMedicacaoDto, newMedPerId)
  // }

  @Get('/:medId')
  async getMedicationByIdUsingRelations(
    @Param('medId') medId: number,
  ): Promise<ReturnMedicationDto> {
    const medicationEntity = await this.medicationService.getMedicationByIdUsingRelations(medId);

    if (!medicationEntity) {
      throw new NotFoundException(`medId: ${medId} Not Found`);
    }
  
    return new ReturnMedicationDto(medicationEntity);
  }

  @UsePipes(ValidationPipe)
  @Get()
  async gettAllMedicationByPerId(@Param('medPerId') medPerId: number): Promise<MedicationEntity[]> {
    const newPerId = this.profileIdService.getProfileId();
    return this.medicationService.gettAllMedicationByPerId(newPerId);
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
