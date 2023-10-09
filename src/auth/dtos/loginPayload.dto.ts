//import { PerfilEntity } from 'src/perfil/entities/perfil.entity';
import { UserEntity } from 'src/user/entities/user.entity';

export class LoginPayload {
  id: number;
  typeUser: number;
  //perfil_id: number;

  constructor(user: UserEntity) {
    this.id = user.usuId;
    this.typeUser = user.usuTipo;
    //this.perfil_id = perfil.perId;
  }
}
