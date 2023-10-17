"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnConfirmationDto = void 0;
class ReturnConfirmationDto {
    constructor(confirmationEntity) {
        this.conId = confirmationEntity.conId;
        this.conMedId = confirmationEntity.conMedId;
        this.conHorId = confirmationEntity.conHorId;
        this.conPerId = confirmationEntity.conPerId;
        this.conData = confirmationEntity.conData;
    }
}
exports.ReturnConfirmationDto = ReturnConfirmationDto;
//# sourceMappingURL=returnConfirmation.dto.js.map