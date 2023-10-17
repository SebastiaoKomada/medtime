import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    criarUsuario(CreateUserDto: CreateUserDto): Promise<UserEntity>;
    pegarUsuarios(): Promise<UserEntity[]>;
    findUserById(usuId: number): Promise<UserEntity>;
    findUserByEmail(usuEmail: string): Promise<UserEntity>;
    getUserByIdUsingRelations(usuId: number): Promise<UserEntity>;
}
