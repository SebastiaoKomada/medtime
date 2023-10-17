import { ProfileIdService } from './../profile/profile-id/profile-id.service';
import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TimeService } from './time.service';
import { CreateTimeDto } from './dtos/createTime.dto';
import { UserId } from 'src/decorators/user-id.decorator';
import { TimeEntity } from './entities/time.entity';
import { UserType } from 'src/user/enum/user.enum';
import { Roles } from 'src/decorators/roles.decorator';

@Roles(UserType.User)
@Controller('time')
export class TimeController {
  constructor(
    private readonly timeService: TimeService,
    private readonly profileIdService: ProfileIdService,
  ) {}

  // @UsePipes(ValidationPipe)
  // @Post()
  // async createPerfil(
  //   @Body() createTimeDto: CreateTimeDto,
  //   @UserId() horUsuId: number,
  //   @Param('horPerdId') horPerId: number,
  // ): Promise<TimeEntity> {
  //   const newPerId = this.profileIdService.getProfileId();
  //   console.log(newPerId)
  //   return this.timeService.createTime(createTimeDto, horUsuId, newPerId);
  // }
}
