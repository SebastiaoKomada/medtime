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
exports.AuthService = void 0;
const bcrypt_1 = require("bcrypt");
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const returnUser_dto_1 = require("../user/dtos/returnUser.dto");
const loginPayload_dto_1 = require("./dtos/loginPayload.dto");
const profile_service_1 = require("../profile/profile.service");
const profile_id_service_1 = require("../profile/profile-id/profile-id.service");
let AuthService = class AuthService {
    constructor(userService, profileService, profileIdService, jwtService) {
        this.userService = userService;
        this.profileService = profileService;
        this.profileIdService = profileIdService;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = await this.userService
            .findUserByEmail(loginDto.usuEmail)
            .catch(() => undefined);
        const isMatch = await (0, bcrypt_1.compare)(loginDto.usuSenha, user?.usuSenha || '');
        if (!user || !isMatch) {
            throw new common_1.NotFoundException('Email ou senha inválidos');
        }
        const returnUser = new returnUser_dto_1.ReturnUserDto(await this.userService.getUserByIdUsingRelations(user.usuId));
        if (!returnUser.perfis || returnUser.perfis.length === 0) {
            const createProfileDto = {
                perNome: returnUser.usuNome,
                perImagem: 'imagemteste.png',
            };
            const newPerfil = await this.profileService.createPerfil(createProfileDto, user.usuId);
        }
        if (returnUser.perfis && returnUser.perfis.length > 0) {
            const userPerfil = returnUser.perfis[0];
            this.profileIdService.setProfileId(Number(userPerfil.perId));
            console.log(this.profileIdService.getProfileId());
        }
        return {
            accessToken: this.jwtService.sign({ ...new loginPayload_dto_1.LoginPayload(user) }),
            user: new returnUser_dto_1.ReturnUserDto(user),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        profile_service_1.ProfileService,
        profile_id_service_1.ProfileIdService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map