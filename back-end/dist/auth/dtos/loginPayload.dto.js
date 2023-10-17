"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPayload = void 0;
class LoginPayload {
    constructor(user) {
        this.id = user.usuId;
        this.typeUser = user.usuTipo;
    }
}
exports.LoginPayload = LoginPayload;
//# sourceMappingURL=loginPayload.dto.js.map