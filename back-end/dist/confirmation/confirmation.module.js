"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationModule = void 0;
const common_1 = require("@nestjs/common");
const confirmation_controller_1 = require("./confirmation.controller");
const confirmation_service_1 = require("./confirmation.service");
const typeorm_1 = require("@nestjs/typeorm");
const confirmation_entity_1 = require("./entities/confirmation.entity");
const time_module_1 = require("../time/time.module");
const medication_module_1 = require("../medication/medication.module");
const profile_id_module_1 = require("../profile/profile-id/profile-id.module");
const profile_module_1 = require("../profile/profile.module");
let ConfirmationModule = class ConfirmationModule {
};
exports.ConfirmationModule = ConfirmationModule;
exports.ConfirmationModule = ConfirmationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([confirmation_entity_1.ConfirmationEntity]),
            time_module_1.TimeModule, medication_module_1.MedicationModule, profile_module_1.ProfileModule, profile_id_module_1.ProfileIdModule
        ],
        controllers: [confirmation_controller_1.ConfirmationController],
        providers: [confirmation_service_1.ConfirmationService]
    })
], ConfirmationModule);
//# sourceMappingURL=confirmation.module.js.map