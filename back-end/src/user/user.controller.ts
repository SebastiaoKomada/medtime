import { UserService } from './user.service';
import { Controller, Body, Post, Get, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity'
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UsePipes(ValidationPipe)
  @Post()
  async criar(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.criarUsuario(createUser);
  }

  @Get('')
  async pegar(): Promise<ReturnUserDto[]> {
    return (await this.userService.pegarUsuarios()).map((UserEntity) => new ReturnUserDto(UserEntity));
  }

  @Get('/:usuId')
  async getUserById(@Param('usuId') usuId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.userService.getUserByIdUsingRelations(usuId),);
  }
 
}
