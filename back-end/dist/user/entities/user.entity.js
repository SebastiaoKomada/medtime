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
exports.UserEntity = void 0;
const profile_entity_1 = require("../../profile/entities/profile.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "usuId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuNome', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "usuNome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuEmail', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "usuEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuSenha', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "usuSenha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuTelefone', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "usuTelefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuTipo', nullable: false }),
    __metadata("design:type", Number)
], UserEntity.prototype, "usuTipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => profile_entity_1.ProfileEntity, (perfis) => perfis.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "perfis", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tblusuario' })
], UserEntity);
//# sourceMappingURL=user.entity.js.map