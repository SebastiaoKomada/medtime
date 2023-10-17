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
exports.TimeController = void 0;
const profile_id_service_1 = require("./../profile/profile-id/profile-id.service");
const common_1 = require("@nestjs/common");
const time_service_1 = require("./time.service");
const user_enum_1 = require("../user/enum/user.enum");
const roles_decorator_1 = require("../decorators/roles.decorator");
let TimeController = class TimeController {
    constructor(timeService, profileIdService) {
        this.timeService = timeService;
        this.profileIdService = profileIdService;
    }
};
exports.TimeController = TimeController;
exports.TimeController = TimeController = __decorate([
    (0, roles_decorator_1.Roles)(user_enum_1.UserType.User),
    (0, common_1.Controller)('time'),
    __metadata("design:paramtypes", [time_service_1.TimeService,
        profile_id_service_1.ProfileIdService])
], TimeController);
//# sourceMappingURL=time.controller.js.map