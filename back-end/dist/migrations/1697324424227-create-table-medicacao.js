"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableMedicacao1697324424227 = void 0;
class CreateTableMedicacao1697324424227 {
    async up(queryRunner) {
        queryRunner.query(`
        CREATE TABLE tblmedicacao (
            medId int(50) PRIMARY KEY AUTO_INCREMENT,
            medNome varchar(100) NOT NULL,
            medForma varchar(255) NOT NULL,
            medQuantidade int(5) NOT NULL,
            medDataInicio date NOT NULL,
            medDataFim date,
            medPerID int(50) NOT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp(),
            updated_at datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
          )

        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
        drop table tblmedicacao
        `);
    }
}
exports.CreateTableMedicacao1697324424227 = CreateTableMedicacao1697324424227;
//# sourceMappingURL=1697324424227-create-table-medicacao.js.map