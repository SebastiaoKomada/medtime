export interface UserType {
    usuId: number;
    usuNome: string;
    usuEmail: string;
    usuSenha: string
    usuTelefone: string;
    perfis: ProfileType[];
}

export interface ProfileType {
    perId: number;
    perNome: string;
    perImagem: string;
    perUsuId: string;
}