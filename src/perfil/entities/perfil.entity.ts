import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tblperfil' })
export class PerfilEntity {

    @PrimaryGeneratedColumn()
    perId: number;

    @Column({ name: 'perNome', nullable: false })
    perNome: string;

    @Column({ name: 'perImagem', nullable: true })
    perImagem: string;

    @Column({ name: 'perUsuId', nullable: false })
    perUsuId: number;

    @ManyToOne(() => UserEntity, (user) => user.perfis)
    @JoinColumn({ name: 'perUsuId', referencedColumnName: 'usuId' })
    user?: UserEntity;
}
