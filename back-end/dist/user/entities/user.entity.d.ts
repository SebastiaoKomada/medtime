import { ProfileEntity } from "src/profile/entities/profile.entity";
export declare class UserEntity {
    usuId: number;
    usuNome: string;
    usuEmail: string;
    usuSenha: string;
    usuTelefone: string;
    usuTipo: number;
    created_at: string;
    updated_at: string;
    perfis?: ProfileEntity[];
}
