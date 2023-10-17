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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const profile_entity_1 = require("./entities/profile.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cache_service_1 = require("../cache/cache.service");
const user_service_1 = require("../user/user.service");
const profile_id_service_1 = require("./profile-id/profile-id.service");
let ProfileService = class ProfileService {
    constructor(perfilRepository, userService, cacheRepository, profileIdService) {
        this.perfilRepository = perfilRepository;
        this.userService = userService;
        this.cacheRepository = cacheRepository;
        this.profileIdService = profileIdService;
    }
    async gettAllPerfilByUserId(perUsuId) {
        return this.perfilRepository
            .find({
            where: {
                perUsuId,
            },
        })
            .catch(() => undefined);
    }
    async createPerfil(createProfileDto, perUsuId) {
        const user = await this.userService.findUserById(perUsuId);
        return this.perfilRepository.save({
            ...createProfileDto,
            perUsuId,
        });
    }
    async selectPerfil(perId, perUsuId) {
        const perfil = await this.perfilRepository.findOne({
            where: {
                perId,
                perUsuId,
            },
        });
        if (!perfil) {
            throw new common_1.NotFoundException(`Perfil id: ${perId} not found`);
        }
        this.profileIdService.setProfileId(perfil.perId);
        console.log('Perfil setado: ', this.profileIdService.getProfileId());
        return perfil;
    }
    async deletePerfilByID(perId, perUsuId) {
        const deletePerfil = await this.selectPerfil(perId, perUsuId);
        return this.perfilRepository.delete(deletePerfil);
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.ProfileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        cache_service_1.CacheService,
        profile_id_service_1.ProfileIdService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map