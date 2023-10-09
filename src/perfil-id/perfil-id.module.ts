import { Module } from '@nestjs/common';
import { PerfilIdService } from './perfil-id.service';

@Module({
    providers: [PerfilIdService],
    exports: [PerfilIdService],
})

export class PerfilIdModule { }
