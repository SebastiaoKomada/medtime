"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableConfirmacao1697325296616 = void 0;
class CreateTableConfirmacao1697325296616 {
    async up(queryRunner) {
        queryRunner.query(`
        CREATE TABLE tblconfirmacao (
            conId int(50) PRIMARY KEY AUTO_INCREMENT,
            conPerId int(50) NOT NULL,
            conMedId int(50) NOT NULL,
            conHorId int(50) NOT NULL,
            conData date NOT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp(),
            updated_at datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
          )

        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        drop table tblconfirmacao
        `);
    }
}
exports.CreateTableConfirmacao1697325296616 = CreateTableConfirmacao1697325296616;
//# sourceMappingURL=1697325296616-create-table-confirmacao.js.map