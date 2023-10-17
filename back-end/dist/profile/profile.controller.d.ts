import { ProfileIdService } from './profile-id/profile-id.service';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dtos/createProfile.dto';
import { ProfileEntity } from './entities/profile.entity';
import { DeleteResult } from 'typeorm';
export declare class PerfilController {
    private readonly ProfileService;
    private readonly profileIdService;
    constructor(ProfileService: ProfileService, profileIdService: ProfileIdService);
    gettAllPerfilByUserId(perUsuId: number): Promise<ProfileEntity[]>;
    createPerfil(createProfilelDto: CreateProfileDto, perUsuId: number): Promise<ProfileEntity>;
    selectPerfil(perId: number, perUsuId: number): Promise<ProfileEntity>;
    deletePerfil(perId: number, perUsuId: number): Promise<DeleteResult>;
}
