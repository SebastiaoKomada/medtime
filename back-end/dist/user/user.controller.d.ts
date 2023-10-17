import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    criar(createUser: CreateUserDto): Promise<UserEntity>;
    pegar(): Promise<ReturnUserDto[]>;
    getUserById(usuId: number): Promise<ReturnUserDto>;
}
