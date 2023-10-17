"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTblhorario1697399001312 = void 0;
class CreateTableTblhorario1697399001312 {
    async up(queryRunner) {
        queryRunner.query(`
        CREATE TABLE tblhorario (
            horId int(11) PRIMARY KEY AUTO_INCREMENT,
            horMedId int(11) NOT NULL,
            horUsuId int(11) NOT NULL,
            horPerId int(11) NOT NULL,
            horario time NOT NULL,
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
exports.CreateTableTblhorario1697399001312 = CreateTableTblhorario1697399001312;
//# sourceMappingURL=1697399001312-create-table-tblhorario.js.map