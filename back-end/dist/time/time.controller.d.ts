import { ProfileIdService } from './../profile/profile-id/profile-id.service';
import { TimeService } from './time.service';
export declare class TimeController {
    private readonly timeService;
    private readonly profileIdService;
    constructor(timeService: TimeService, profileIdService: ProfileIdService);
}
