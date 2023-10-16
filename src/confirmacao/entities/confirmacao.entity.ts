import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tblconfirmacao' })
export class MedicacaoEntity {
 
    @PrimaryGeneratedColumn()
    conId: number;

    @Column({ name: 'conPerId', nullable: false })
    conPerId: number;

    @Column({ name: 'conMedId', nullable: false })
    conMedId: number; 

    @Column({ name: 'conHorId', nullable: false })
    conHorId: number; 

    @Column({ name: 'conData', nullable: false })
    conData: Date; 
}