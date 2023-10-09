import { CreatePerfilDto } from './../perfil/dtos/createPerfil.dto';
import { compare } from 'bcrypt';
import { UserService } from './../user/user.service';
import { LoginDto } from './dtos/login.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { PerfilEntity } from 'src/perfil/entities/perfil.entity';
import { Repository } from 'typeorm';
import { PerfilService } from 'src/perfil/perfil.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly perfilService: PerfilService,
    private jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto): Promise<ReturnLogin> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.usuEmail)
      .catch(() => undefined);
    const isMatch = await compare(loginDto.usuSenha, user?.usuSenha || '');

    if (!user || !isMatch) {
      throw new NotFoundException('Email ou senha inválidos');
    }

    if (!user.perfis) {
      const createPerfilDto: CreatePerfilDto = {
        perNome: user.usuNome,
        perImagem: 'imagemteste.png'
      };

      const newPerfil = await this.perfilService.createPerfil(createPerfilDto, user.usuId);
    }
    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
