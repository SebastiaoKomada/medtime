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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async criarUsuario(CreateUserDto) {
        const user = await this.findUserByEmail(CreateUserDto.usuEmail).catch(() => undefined);
        if (user) {
            throw new common_1.BadGatewayException('Email already registered in the system');
        }
        const saltOrRounds = 10;
        const passwordHashed = await (0, bcrypt_1.hash)(CreateUserDto.usuSenha, saltOrRounds);
        return this.userRepository.save({
            ...CreateUserDto,
            usuSenha: passwordHashed
        });
    }
    async pegarUsuarios() {
        return this.userRepository.find();
    }
    async findUserById(usuId) {
        const user = await this.userRepository.findOne({
            where: {
                usuId,
            }
        });
        if (!user) {
            throw new common_1.NotFoundException(`usuId: ${usuId} Not Found`);
        }
        return user;
    }
    async findUserByEmail(usuEmail) {
        const user = await this.userRepository.findOne({
            where: {
                usuEmail,
            }
        });
        if (!user) {
            throw new common_1.NotFoundException(`usuEmail: ${usuEmail} Not Found`);
        }
        return user;
    }
    async getUserByIdUsingRelations(usuId) {
        return this.userRepository.findOne({
            where: {
                usuId,
            },
            relations: ['perfis'],
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map