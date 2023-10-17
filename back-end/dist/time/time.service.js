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
exports.TimeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const time_entity_1 = require("./entities/time.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const profile_service_1 = require("../profile/profile.service");
const profile_id_service_1 = require("../profile/profile-id/profile-id.service");
let TimeService = class TimeService {
    constructor(timeRepository, userService, profileService, profileIdService) {
        this.timeRepository = timeRepository;
        this.userService = userService;
        this.profileService = profileService;
        this.profileIdService = profileIdService;
    }
    async createTime(createTimeDto, horUsuId, horPerId) {
        const user = await this.userService.findUserById(horUsuId);
        const profile = await this.profileService.selectPerfil(horPerId, horUsuId);
        return this.timeRepository.save({
            ...createTimeDto,
            horUsuId,
            horPerId,
        });
    }
    async findTimeById(horId) {
        const time = await this.timeRepository.findOne({
            where: {
                horId,
            }
        });
        if (!time) {
            throw new common_1.NotFoundException(`usuId: ${horId} Not Found`);
        }
        return time;
    }
};
exports.TimeService = TimeService;
exports.TimeService = TimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(time_entity_1.TimeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        profile_service_1.ProfileService,
        profile_id_service_1.ProfileIdService])
], TimeService);
//# sourceMappingURL=time.service.js.map