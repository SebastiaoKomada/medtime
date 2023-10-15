import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableHorario1697323748727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        CREATE TABLE tblhorario (
            horId int(11) PRIMARY KEY AUTO_INCREMENT,
            horMedId int(11) NOT NULL,
            horUsuId int(11) NOT NULL,
            horPerId int(11) NOT NULL,
            horario date NOT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp(),
            updated_at datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
          )

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        drop table tblhorario
        `)
    }

}