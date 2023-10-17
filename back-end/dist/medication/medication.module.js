"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile_id_module_1 = require("../profile/profile-id/profile-id.module");
const medication_controller_1 = require("./medication.controller");
const medication_service_1 = require("./medication.service");
const medication_entity_1 = require("./entities/medication.entity");
const time_entity_1 = require("../time/entities/time.entity");
let MedicationModule = class MedicationModule {
};
exports.MedicationModule = MedicationModule;
exports.MedicationModule = MedicationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medication_entity_1.MedicationEntity]), typeorm_1.TypeOrmModule.forFeature([time_entity_1.TimeEntity]), profile_id_module_1.ProfileIdModule],
        controllers: [medication_controller_1.MedicationController],
        providers: [medication_service_1.MedicationService],
        exports: [medication_service_1.MedicationService],
    })
], MedicationModule);
//# sourceMappingURL=medication.module.js.map