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
exports.ConfirmationService = void 0;
const medication_service_1 = require("../medication/medication.service");
const common_1 = require("@nestjs/common");
const confirmation_entity_1 = require("./entities/confirmation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const time_service_1 = require("../time/time.service");
let ConfirmationService = class ConfirmationService {
    constructor(confirmationRepository, medicationService, timeService) {
        this.confirmationRepository = confirmationRepository;
        this.medicationService = medicationService;
        this.timeService = timeService;
    }
    async confirmMedication(createConfirmationDto, conPerId, conMedId, conHorId) {
        const medication = await this.medicationService.findMedicationById(conMedId);
        const time = await this.timeService.findTimeById(conHorId);
        return this.confirmationRepository.save({
            ...createConfirmationDto,
            conPerId,
            conMedId,
            conHorId
        });
    }
};
exports.ConfirmationService = ConfirmationService;
exports.ConfirmationService = ConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(confirmation_entity_1.ConfirmationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medication_service_1.MedicationService,
        time_service_1.TimeService])
], ConfirmationService);
//# sourceMappingURL=confirmation.service.js.map