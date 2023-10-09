import { PerfilEntity } from "src/perfil/entities/perfil.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tblUsuario' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  usuId: number;

  @Column({ name: 'usuNome', nullable: false })
  usuNome: string;

  @Column({ name: 'usuEmail', nullable: false })
  usuEmail: string;

  @Column({ name: 'usuSenha', nullable: false })
  usuSenha: string;

  @Column({ name: 'usuTelefone', nullable: false })
  usuTelefone: string;

  @Column({ name: 'usuTipo', nullable: false })
  usuTipo: number;

  @Column({ name: 'created_at', nullable: false })
  created_at: string;

  @Column({ name: 'updated_at', nullable: false })
  updated_at: string;

  @OneToMany(() => PerfilEntity, (perfis) => perfis.user)
  perfis?: PerfilEntity[];
}
