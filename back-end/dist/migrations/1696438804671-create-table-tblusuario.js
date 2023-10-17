"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTblusuario1696438804671 = void 0;
class CreateTableTblusuario1696438804671 {
    async up(queryRunner) {
        queryRunner.query(`
        CREATE TABLE tblusuario (
            usuId int(11) PRIMARY KEY AUTO_INCREMENT,
            usuNome varchar(100) NOT NULL,
            usuEmail varchar(255) NOT NULL,
            usuSenha varchar(255) NOT NULL,
            usuTelefone varchar(20) NOT NULL,
            usuTipo int(11) NOT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp(),
            updated_at datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
          )

        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        drop table tblusuario
        `);
    }
}
exports.CreateTableTblusuario1696438804671 = CreateTableTblusuario1696438804671;
//# sourceMappingURL=1696438804671-create-table-tblusuario.js.map