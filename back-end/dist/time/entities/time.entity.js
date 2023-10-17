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
exports.TimeEntity = void 0;
const medication_entity_1 = require("../../medication/entities/medication.entity");
const typeorm_1 = require("typeorm");
const confirmation_entity_1 = require("../../confirmation/entities/confirmation.entity");
let TimeEntity = class TimeEntity {
};
exports.TimeEntity = TimeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TimeEntity.prototype, "horId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horMedId', nullable: false }),
    __metadata("design:type", Number)
], TimeEntity.prototype, "horMedId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horUsuId', nullable: false }),
    __metadata("design:type", Number)
], TimeEntity.prototype, "horUsuId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horPerId', nullable: false }),
    __metadata("design:type", Number)
], TimeEntity.prototype, "horPerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'horario', type: 'time', nullable: false }),
    __metadata("design:type", String)
], TimeEntity.prototype, "horario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', nullable: false }),
    __metadata("design:type", String)
], TimeEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: false }),
    __metadata("design:type", String)
], TimeEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medication_entity_1.MedicationEntity, (medication) => medication.times),
    (0, typeorm_1.JoinColumn)({ name: 'horMedId', referencedColumnName: 'medId' }),
    __metadata("design:type", medication_entity_1.MedicationEntity)
], TimeEntity.prototype, "medication", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => confirmation_entity_1.ConfirmationEntity, (confirmation) => confirmation.times),
    __metadata("design:type", Array)
], TimeEntity.prototype, "confirmation", void 0);
exports.TimeEntity = TimeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tblhorario' })
], TimeEntity);
//# sourceMappingURL=time.entity.js.map