import { ReturnPerfilDto } from "src/perfil/dtos/returnPerfil.dto";
import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
  usuId: number;
  usuNome: string;
  usuEmail: string;
  usuTelefone: string;
  perfis?: ReturnPerfilDto[];

  constructor(userEntity: UserEntity) {
    this.usuId = userEntity.usuId,
      this.usuNome = userEntity.usuNome,
      this.usuEmail = userEntity.usuEmail,
      this.usuTelefone = userEntity.usuTelefone,

      this.perfis = userEntity.perfis ? userEntity.perfis.map((perfis) => new ReturnPerfilDto(perfis)) : undefined;
  }
}