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
exports.PerfilController = void 0;
const profile_id_service_1 = require("./profile-id/profile-id.service");
const profile_service_1 = require("./profile.service");
const common_1 = require("@nestjs/common");
const createProfile_dto_1 = require("./dtos/createProfile.dto");
const user_enum_1 = require("../user/enum/user.enum");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
let PerfilController = class PerfilController {
    constructor(ProfileService, profileIdService) {
        this.ProfileService = ProfileService;
        this.profileIdService = profileIdService;
    }
    async gettAllPerfilByUserId(perUsuId) {
        return this.ProfileService.gettAllPerfilByUserId(perUsuId);
    }
    async createPerfil(createProfilelDto, perUsuId) {
        return this.ProfileService.createPerfil(createProfilelDto, perUsuId);
    }
    async selectPerfil(perId, perUsuId) {
        return this.ProfileService.selectPerfil(perId, perUsuId);
    }
    async deletePerfil(perId, perUsuId) {
        return this.ProfileService.deletePerfilByID(perId, perUsuId);
    }
};
exports.PerfilController = PerfilController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "gettAllPerfilByUserId", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProfile_dto_1.CreateProfileDto, Number]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "createPerfil", null);
__decorate([
    (0, common_1.Post)('/:perId'),
    __param(0, (0, common_1.Param)('perId')),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "selectPerfil", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Delete)('/:perId'),
    __param(0, (0, common_1.Param)('perId')),
    __param(1, (0, common_1.Param)('perUsuId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "deletePerfil", null);
exports.PerfilController = PerfilController = __decorate([
    (0, roles_decorator_1.Roles)(user_enum_1.UserType.User),
    (0, common_1.Controller)('perfil'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        profile_id_service_1.ProfileIdService])
], PerfilController);
//# sourceMappingURL=profile.controller.js.map