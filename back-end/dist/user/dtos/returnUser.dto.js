"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnUserDto = void 0;
const returnProfile_dto_1 = require("../../profile/dtos/returnProfile.dto");
class ReturnUserDto {
    constructor(userEntity) {
        this.usuId = userEntity.usuId,
            this.usuNome = userEntity.usuNome,
            this.usuEmail = userEntity.usuEmail,
            this.usuTelefone = userEntity.usuTelefone,
            this.perfis = userEntity.perfis ? userEntity.perfis.map((perfis) => new returnProfile_dto_1.ReturnProfileDto(perfis)) : undefined;
    }
}
exports.ReturnUserDto = ReturnUserDto;
//# sourceMappingURL=returnUser.dto.js.map