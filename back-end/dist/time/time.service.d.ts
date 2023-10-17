import { TimeEntity } from './entities/time.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CreateTimeDto } from './dtos/createTime.dto';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';
export declare class TimeService {
    private readonly timeRepository;
    private readonly userService;
    private readonly profileService;
    private readonly profileIdService;
    constructor(timeRepository: Repository<TimeEntity>, userService: UserService, profileService: ProfileService, profileIdService: ProfileIdService);
    createTime(createTimeDto: CreateTimeDto, horUsuId: number, horPerId: number): Promise<TimeEntity>;
    findTimeById(horId: number): Promise<TimeEntity>;
}
