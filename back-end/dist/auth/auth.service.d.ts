import { UserService } from './../user/user.service';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { ProfileService } from '../profile/profile.service';
import { ProfileIdService } from 'src/profile/profile-id/profile-id.service';
export declare class AuthService {
    private readonly userService;
    private readonly profileService;
    private readonly profileIdService;
    private jwtService;
    constructor(userService: UserService, profileService: ProfileService, profileIdService: ProfileIdService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<ReturnLogin>;
}
