import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Repository } from "typeorm";
import { MedicationEntity } from "./entities/medication.entity";
import { ProfileIdService } from "src/profile/profile-id/profile-id.service";
import { CreateMedicationDto } from "./dtos/createMedication.dto";
import { MedicationService } from "./medication.service";
import { Roles } from "src/decorators/roles.decorator";
import { UserType } from "src/user/enum/user.enum";
import { ReturnTimeDto } from "src/time/dtos/returnTime.dto";
import { ReturnMedicationDto } from "./dtos/returnMedication.dto";

@Roles(UserType.User)
@Controller('medication')
export class MedicationController {
    constructor(
        private readonly profileIdService: ProfileIdService,
        private readonly medicationService: MedicationService,
    ){}

    @UsePipes(ValidationPipe)
    @Post()
    async createMedication(@Body() CreateMedicacaoDto: CreateMedicationDto, @Param('medPerId') medPerId: number): Promise<MedicationEntity> {
        const newMedPerId = this.profileIdService.getProfileId();
        return this.medicationService.createMedication(CreateMedicacaoDto, newMedPerId)
    }

    @Get('/:medId')
    async getUserById(@Param('medId') medId: number): Promise<ReturnMedicationDto> {
      return new ReturnMedicationDto(await this.medicationService.getMedicationByIdUsingRelations(medId),);
    }
}