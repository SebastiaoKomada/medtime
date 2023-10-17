"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const medication_entity_1 = require("./entities/medication.entity");
const typeorm_2 = require("@nestjs/typeorm");
const time_entity_1 = require("../time/entities/time.entity");
const profile_id_service_1 = require("../profile/profile-id/profile-id.service");
const returnMedicationWithTimes_dto_1 = require("./dtos/returnMedicationWithTimes.dto");
let MedicationService = class MedicationService {
    constructor(medicationRepository, timeRepository, profileIdService) {
        this.medicationRepository = medicationRepository;
        this.timeRepository = timeRepository;
        this.profileIdService = profileIdService;
    }
    async createMedication(createMedicationDto, medPerId) {
        return this.medicationRepository.save({
            ...createMedicationDto,
            medPerId,
        });
    }
    async findMedicationById(medId) {
        const time = await this.medicationRepository.findOne({
            where: {
                medId,
            },
        });
        if (!time) {
            throw new common_1.NotFoundException(`usuId: ${medId} Not Found`);
        }
        return time;
    }
    async getMedicationByIdUsingRelations(medId) {
        return this.medicationRepository.findOne({
            where: {
                medId,
            },
            relations: ['times'],
        });
    }
    async createMedicationAndTimes(medication, horarios, userId) {
        const newPerId = this.profileIdService.getProfileId();
        medication.medPerId = newPerId;
        const savedMedication = await this.medicationRepository.save(medication);
        const savedTimes = [];
        for (const horario of horarios) {
            const timeEntry = new time_entity_1.TimeEntity();
            timeEntry.medication = savedMedication;
            timeEntry.horario = horario;
            timeEntry.horPerId = newPerId;
            timeEntry.horUsuId = userId;
            const savedTime = await this.timeRepository.save(timeEntry);
            savedTimes.push(savedTime);
        }
        const response = new returnMedicationWithTimes_dto_1.ReturnMedicationWithTimesDto(savedMedication, savedTimes);
        return response;
    }
};
exports.MedicationService = MedicationService;
exports.MedicationService = MedicationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(medication_entity_1.MedicationEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(time_entity_1.TimeEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        profile_id_service_1.ProfileIdService])
], MedicationService);
//# sourceMappingURL=medication.service.js.map