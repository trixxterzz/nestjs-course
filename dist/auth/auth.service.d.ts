import { UsersRepository } from './users.repository';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void>;
    signIn(authCredentialsDTO: AuthCredentialsDTO): Promise<{
        accessToken: string;
    }>;
}
