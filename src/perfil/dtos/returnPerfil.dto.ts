import { PerfilEntity } from "../entities/perfil.entity";

export class ReturnPerfilDto {
    perId: number;
    perNome: string;
    perImagem: string;

    constructor(perfilEntity: PerfilEntity) {
        this.perId = perfilEntity.perId,
            this.perNome = perfilEntity.perNome,
            this.perImagem = perfilEntity.perImagem
    }
}