import { ProfileEntity } from "../entities/profile.entity";
export declare class ReturnProfileDto {
    perId: number;
    perNome: string;
    perImagem: string;
    constructor(profileEntity: ProfileEntity);
}
