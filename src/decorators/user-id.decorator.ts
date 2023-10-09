import {createParamDecorator,  ExecutionContext} from '@nestjs/common';
import { authorizationToLoginPaylod } from 'src/utils/base-64-converter';

export const UserId = createParamDecorator(
    (_, ctx: ExecutionContext) => {
        const { authorization } = ctx.switchToHttp().getRequest().headers;

        const loginPayload = authorizationToLoginPaylod(authorization);

        //console.log('authorization', authorization);
        return loginPayload?.id;
    }
  );