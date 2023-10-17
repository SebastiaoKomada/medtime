"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnMedicationDto = void 0;
const returnTime_dto_1 = require("../../time/dtos/returnTime.dto");
class ReturnMedicationDto {
    constructor(medicationEntity) {
        this.medId = medicationEntity.medId;
        this.medForma = medicationEntity.medForma;
        this.medQuantidade = medicationEntity.medQuantidade;
        this.medDataInicio = medicationEntity.medDataInicio;
        this.medDataFim = medicationEntity.medDataFim;
        this.times = medicationEntity.times
            ? medicationEntity.times.map((time) => new returnTime_dto_1.ReturnTimeDto(time))
            : undefined;
    }
}
exports.ReturnMedicationDto = ReturnMedicationDto;
//# sourceMappingURL=returnMedication.dto.js.map