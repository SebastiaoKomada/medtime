import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilEntity } from './entities/perfil.entity';
import { PerfilController } from './perfil.controller';
import { PerfilService } from './perfil.service';
import { CacheModule } from 'src/cache/cache.module';
import { UserModule } from 'src/user/user.module';
import { PerfilIdModule } from 'src/perfil-id/perfil-id.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([PerfilEntity]),
        CacheModule, UserModule, PerfilIdModule
    ],
    controllers: [PerfilController],
    providers: [PerfilService],
    exports: [PerfilService],
})
export class PerfilModule { }
