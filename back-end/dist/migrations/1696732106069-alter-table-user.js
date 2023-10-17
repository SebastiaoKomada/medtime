"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTableUser1696732106069 = void 0;
class AlterTableUser1696732106069 {
    async up(queryRunner) {
        queryRunner.query(`
        ALTER TABLE tblusuario CHANGE usuTipo usuTipo INT(11) NOT NULL DEFAULT 1,
        add unique (usuEmail)
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        `);
    }
}
exports.AlterTableUser1696732106069 = AlterTableUser1696732106069;
//# sourceMappingURL=1696732106069-alter-table-user.js.map