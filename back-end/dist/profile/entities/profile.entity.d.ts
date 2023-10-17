import { UserEntity } from "../../user/entities/user.entity";
export declare class ProfileEntity {
    perId: number;
    perNome: string;
    perImagem: string;
    perUsuId: number;
    user?: UserEntity;
}
