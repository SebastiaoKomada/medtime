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
exports.ProfileEntity = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let ProfileEntity = class ProfileEntity {
};
exports.ProfileEntity = ProfileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "perId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'perNome', nullable: false }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "perNome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'perImagem', nullable: true }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "perImagem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'perUsuId', nullable: false }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "perUsuId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.perfis),
    (0, typeorm_1.JoinColumn)({ name: 'perUsuId', referencedColumnName: 'usuId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProfileEntity.prototype, "user", void 0);
exports.ProfileEntity = ProfileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tblperfil' })
], ProfileEntity);
//# sourceMappingURL=profile.entity.js.map