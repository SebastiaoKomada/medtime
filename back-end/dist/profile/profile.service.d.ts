import { CreateProfileDto } from './dtos/createProfile.dto';
import { ProfileEntity } from './entities/profile.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CacheService } from '../cache/cache.service';
import { UserService } from '../user/user.service';
import { ProfileIdService } from './profile-id/profile-id.service';
export declare class ProfileService {
    private readonly perfilRepository;
    private readonly userService;
    private readonly cacheRepository;
    private readonly profileIdService;
    constructor(perfilRepository: Repository<ProfileEntity>, userService: UserService, cacheRepository: CacheService, profileIdService: ProfileIdService);
    gettAllPerfilByUserId(perUsuId: number): Promise<ProfileEntity[]>;
    createPerfil(createProfileDto: CreateProfileDto, perUsuId: number): Promise<ProfileEntity>;
    selectPerfil(perId: number, perUsuId: number): Promise<ProfileEntity>;
    deletePerfilByID(perId: number, perUsuId: number): Promise<DeleteResult>;
}
