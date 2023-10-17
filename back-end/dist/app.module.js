"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const profile_module_1 = require("./profile/profile.module");
const cache_module_1 = require("./cache/cache.module");
const auth_module_1 = require("./auth/auth.module");
const roles_guards_1 = require("./guards/roles.guards");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const profile_id_service_1 = require("./profile/profile-id/profile-id.service");
const profile_id_module_1 = require("./profile/profile-id/profile-id.module");
const time_module_1 = require("./time/time.module");
const medication_module_1 = require("./medication/medication.module");
const confirmation_module_1 = require("./confirmation/confirmation.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development.local'],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                database: process.env.DB_DATABASE,
                host: process.env.DB_HOST,
                password: process.env.DB_PASSWORD,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                entities: [`${__dirname}/**/*entity{.js,.ts}`],
                migrations: [`${__dirname}/migrations/{.ts,*.js}`],
                migrationsRun: true
            }), user_module_1.UserModule, profile_module_1.ProfileModule, cache_module_1.CacheModule, auth_module_1.AuthModule, jwt_1.JwtModule, profile_id_module_1.ProfileIdModule, time_module_1.TimeModule, medication_module_1.MedicationModule, confirmation_module_1.ConfirmationModule],
        controllers: [],
        providers: [{
                provide: core_1.APP_GUARD,
                useClass: roles_guards_1.RolesGuard,
            }, profile_id_service_1.ProfileIdService,],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map