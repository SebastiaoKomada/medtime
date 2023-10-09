import { PerfilService } from './perfil.service';
import { Controller, Body, Post, Get, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreatePerfilDto } from './dtos/createPerfil.dto';
import { PerfilEntity } from './entities/perfil.entity'
import { UserType } from 'src/user/enum/user.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('perfil')
export class PerfilController {
  constructor(private readonly PerfilService: PerfilService,
  ) { }

  @Get()
  async pegar(@UserId() perUsuId: number): Promise<PerfilEntity[]> {
    return this.PerfilService.gettAllPerfilByUserId(perUsuId);
  }
  @UsePipes(ValidationPipe)
  @Post()
  async createPerfil(@Body() createPerfilDto: CreatePerfilDto, @UserId() perUsuId: number): Promise<PerfilEntity> {
    return this.PerfilService.createPerfil(createPerfilDto, perUsuId)
  }

  @Post('/:perId')
  async selectPerfil(@Param('perId') perId: number, @UserId() perUsuId: number): Promise<PerfilEntity> {
    return this.PerfilService.selectPerfil( perId, perUsuId);
  }

}
