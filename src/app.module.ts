import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilModule } from './perfil/perfil.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './guards/roles.guards';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PerfilIdService } from './perfil-id/perfil-id.service';
import { PerfilIdModule } from './perfil-id/perfil-id.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
  }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    // synchronize: true,
    entities: [`${__dirname}/**/*entity{.js,.ts}`],
    migrations: [`${__dirname}/migrations/{.ts,*.js}`],
    migrationsRun: true
  })
    , UserModule, PerfilModule, CacheModule, AuthModule, JwtModule, PerfilIdModule],
  controllers: [],
  providers: [  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }, PerfilIdService,],
})
export class AppModule { }
