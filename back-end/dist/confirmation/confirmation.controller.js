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
exports.ConfirmationController = void 0;
const common_1 = require("@nestjs/common");
const createConfirmation_dto_1 = require("./dtos/createConfirmation.dto");
const confirmation_service_1 = require("./confirmation.service");
const profile_id_service_1 = require("../profile/profile-id/profile-id.service");
let ConfirmationController = class ConfirmationController {
    constructor(confirmationService, profileIdService) {
        this.confirmationService = confirmationService;
        this.profileIdService = profileIdService;
    }
    async confirmMedication(createConfirmationDto, conPerId, conMedId, conHorId) {
        const newPerId = this.profileIdService.getProfileId();
        console.log(newPerId);
        return this.confirmationService.confirmMedication(createConfirmationDto, newPerId, conMedId, conHorId);
    }
};
exports.ConfirmationController = ConfirmationController;
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)("/:conMedId/:conHorId"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('conPerId')),
    __param(2, (0, common_1.Param)('conMedId')),
    __param(3, (0, common_1.Param)('conHorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createConfirmation_dto_1.CreateConfirmationDto, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ConfirmationController.prototype, "confirmMedication", null);
exports.ConfirmationController = ConfirmationController = __decorate([
    (0, common_1.Controller)('confirmation'),
    __metadata("design:paramtypes", [confirmation_service_1.ConfirmationService,
        profile_id_service_1.ProfileIdService])
], ConfirmationController);
//# sourceMappingURL=confirmation.controller.js.map