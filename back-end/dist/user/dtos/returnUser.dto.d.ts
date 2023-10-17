import { ReturnProfileDto } from "../../profile/dtos/returnProfile.dto";
import { UserEntity } from "../entities/user.entity";
export declare class ReturnUserDto {
    usuId: number;
    usuNome: string;
    usuEmail: string;
    usuTelefone: string;
    perfis?: ReturnProfileDto[];
    constructor(userEntity: UserEntity);
}
