import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeEntity } from './entities/time.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CreateTimeDto } from './dtos/createTime.dto';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';

@Injectable()
export class TimeService {
    constructor(
        @InjectRepository(TimeEntity)
        private readonly timeRepository: Repository<TimeEntity>,
        private readonly userService: UserService,
        private readonly profileService: ProfileService,
        private readonly profileIdService: ProfileIdService,
    ) { }

    async createTime(createTimeDto: CreateTimeDto, horUsuId: number, horPerId: number): Promise<TimeEntity> {
        const user = await this.userService.findUserById(horUsuId);
        const profile = await this.profileService.selectPerfil(horPerId, horUsuId);
        return this.timeRepository.save({
            ...createTimeDto,
            horUsuId,
            horPerId,
        })
    }
}
