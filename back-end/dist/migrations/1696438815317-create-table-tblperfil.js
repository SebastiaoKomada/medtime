"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTblperfil1696438815317 = void 0;
class CreateTableTblperfil1696438815317 {
    async up(queryRunner) {
        queryRunner.query(`
        CREATE TABLE tblperfil (
            perId int(11) PRIMARY KEY AUTO_INCREMENT,
            perNome varchar(100) NOT NULL,
            perImagem varchar(255) NOT NULL,
            perUsuId int(11) NOT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp(),
            updated_at datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
          ) 
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        drop table tblperfil
        `);
    }
}
exports.CreateTableTblperfil1696438815317 = CreateTableTblperfil1696438815317;
//# sourceMappingURL=1696438815317-create-table-tblperfil.js.map