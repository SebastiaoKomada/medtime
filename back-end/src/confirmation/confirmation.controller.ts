import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateConfirmationDto } from './dtos/createConfirmation.dto';
import { ConfirmationService } from './confirmation.service';
import { ConfirmationEntity } from './entities/confirmation.entity';
import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';

@Controller('confirmation')
export class ConfirmationController {
  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly profileIdService: ProfileIdService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post('/:conMedId/:conHorId')
  async confirmMedication(
    @Body() createConfirmationDto: CreateConfirmationDto,
    @Param('conPerId') conPerId: number,
    @Param('conMedId') conMedId: number,
    @Param('conHorId') conHorId: number,
  ): Promise<ConfirmationEntity> {
    const newPerId = this.profileIdService.getProfileId();
    console.log(newPerId);
    return this.confirmationService.confirmMedication(
      createConfirmationDto,
      newPerId,
      conMedId,
      conHorId,
    );
  }
}
