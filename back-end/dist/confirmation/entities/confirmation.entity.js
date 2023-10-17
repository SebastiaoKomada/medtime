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
exports.ConfirmationEntity = void 0;
const medication_entity_1 = require("../../medication/entities/medication.entity");
const time_entity_1 = require("../../time/entities/time.entity");
const typeorm_1 = require("typeorm");
let ConfirmationEntity = class ConfirmationEntity {
};
exports.ConfirmationEntity = ConfirmationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConfirmationEntity.prototype, "conId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conPerId', nullable: false }),
    __metadata("design:type", Number)
], ConfirmationEntity.prototype, "conPerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conMedId', nullable: false }),
    __metadata("design:type", Number)
], ConfirmationEntity.prototype, "conMedId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conHorId', nullable: false }),
    __metadata("design:type", Number)
], ConfirmationEntity.prototype, "conHorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conData', nullable: false }),
    __metadata("design:type", Date)
], ConfirmationEntity.prototype, "conData", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medication_entity_1.MedicationEntity, (medication) => medication.confirmation),
    (0, typeorm_1.JoinColumn)({ name: 'conMedId', referencedColumnName: 'medId' }),
    __metadata("design:type", medication_entity_1.MedicationEntity)
], ConfirmationEntity.prototype, "medication", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => time_entity_1.TimeEntity, (times) => times.confirmation),
    (0, typeorm_1.JoinColumn)({ name: 'conHorId', referencedColumnName: 'horId' }),
    __metadata("design:type", medication_entity_1.MedicationEntity)
], ConfirmationEntity.prototype, "times", void 0);
exports.ConfirmationEntity = ConfirmationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tblconfirmacao' })
], ConfirmationEntity);
//# sourceMappingURL=confirmation.entity.js.map