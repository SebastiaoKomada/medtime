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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationEntity = void 0;
const confirmation_entity_1 = require("../../confirmation/entities/confirmation.entity");
const time_entity_1 = require("../../time/entities/time.entity");
const typeorm_1 = require("typeorm");
let MedicationEntity = class MedicationEntity {
};
exports.MedicationEntity = MedicationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicationEntity.prototype, "medId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medNome', nullable: false }),
    __metadata("design:type", String)
], MedicationEntity.prototype, "medNome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medForma', nullable: false }),
    __metadata("design:type", String)
], MedicationEntity.prototype, "medForma", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medQuantidade', nullable: false }),
    __metadata("design:type", Number)
], MedicationEntity.prototype, "medQuantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medDataInicio', nullable: false }),
    __metadata("design:type", String)
], MedicationEntity.prototype, "medDataInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medDataFim', nullable: true }),
    __metadata("design:type", String)
], MedicationEntity.prototype, "medDataFim", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'medPerId', nullable: false }),
    __metadata("design:type", Number)
], MedicationEntity.prototype, "medPerId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => time_entity_1.TimeEntity, (times) => times.medication),
    __metadata("design:type", Array)
], MedicationEntity.prototype, "times", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => confirmation_entity_1.ConfirmationEntity, (confirmation) => confirmation.medication),
    __metadata("design:type", Array)
], MedicationEntity.prototype, "confirmation", void 0);
exports.MedicationEntity = MedicationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tblmedicacao' })
], MedicationEntity);
//# sourceMappingURL=medication.entity.js.map