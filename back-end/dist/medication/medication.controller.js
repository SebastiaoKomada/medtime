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
exports.MedicationController = void 0;
const common_1 = require("@nestjs/common");
const medication_service_1 = require("./medication.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_enum_1 = require("../user/enum/user.enum");
const returnMedication_dto_1 = require("./dtos/returnMedication.dto");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
let MedicationController = class MedicationController {
    constructor(medicationService) {
        this.medicationService = medicationService;
    }
    async getUserById(medId) {
        return new returnMedication_dto_1.ReturnMedicationDto(await this.medicationService.getMedicationByIdUsingRelations(medId));
    }
    async createMedicationAndTimes(data, userId) {
        const result = await this.medicationService.createMedicationAndTimes(data.medication, data.horarios, userId);
        return result;
    }
};
exports.MedicationController = MedicationController;
__decorate([
    (0, common_1.Get)('/:medId'),
    __param(0, (0, common_1.Param)('medId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "createMedicationAndTimes", null);
exports.MedicationController = MedicationController = __decorate([
    (0, roles_decorator_1.Roles)(user_enum_1.UserType.User),
    (0, common_1.Controller)('medication'),
    __metadata("design:paramtypes", [medication_service_1.MedicationService])
], MedicationController);
//# sourceMappingURL=medication.controller.js.map