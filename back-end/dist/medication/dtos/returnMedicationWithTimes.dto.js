"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnMedicationWithTimesDto = void 0;
class ReturnMedicationWithTimesDto {
    constructor(medicationEntity, times) {
        this.medication = {
            medNome: medicationEntity.medNome,
            medForma: medicationEntity.medForma,
            medQuantidade: medicationEntity.medQuantidade,
            medDataInicio: medicationEntity.medDataInicio,
            medDataFim: medicationEntity.medDataFim,
            medPerId: medicationEntity.medPerId,
            medId: medicationEntity.medId,
        };
        this.times = times.map((time) => ({
            horario: time.horario,
            horPerId: time.horPerId,
            horUsuId: time.horUsuId,
            horMedId: time.horMedId,
            horId: time.horId,
        }));
    }
}
exports.ReturnMedicationWithTimesDto = ReturnMedicationWithTimesDto;
//# sourceMappingURL=returnMedicationWithTimes.dto.js.map