"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTablePerfil1696732116224 = void 0;
class AlterTablePerfil1696732116224 {
    async up(queryRunner) {
        queryRunner.query(`
        ALTER TABLE tblperfil ADD CONSTRAINT fk_perfil_usuario FOREIGN KEY (perUsuId) REFERENCES tblusuario(usuId) ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }
    async down(queryRunner) {
    }
}
exports.AlterTablePerfil1696732116224 = AlterTablePerfil1696732116224;
//# sourceMappingURL=1696732116224-alter-table-perfil.js.map