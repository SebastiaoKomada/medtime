import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tblmedicacao' })
export class MedicacaoEntity {

    @PrimaryGeneratedColumn()
    medId: number;

    @Column({ name: 'medNome', nullable: false })
    medNome: string;

    @Column({ name: 'medForma', nullable: false })
    medForma: string;

    @Column({ name: 'medQuantidade', nullable: false })
    medQuantidade: number;

    @Column({ name: 'medDataInicio', nullable: false })
    medDataInicio: Date;

    @Column({ name: 'medDataFim', nullable: true })
    medDataFim: Date;

    @Column({ name: 'medPerId', nullable: false })
    medPerId: number;

    @ManyToOne(() => UserEntity, (user) => user.medicacao)
    @JoinColumn({ name: 'medUsuId', referencedColumnName: 'usuId' })
    user?: UserEntity;

}
