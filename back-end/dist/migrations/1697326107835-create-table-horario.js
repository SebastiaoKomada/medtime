"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableHorario1697323748727 = void 0;
class CreateTableHorario1697323748727 {
    async up(queryRunner) {
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

        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        drop table tblhorario
        `);
    }
}
exports.CreateTableHorario1697323748727 = CreateTableHorario1697323748727;
//# sourceMappingURL=1697326107835-create-table-horario.js.map