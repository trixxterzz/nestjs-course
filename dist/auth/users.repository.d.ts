import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
export declare class UsersRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void>;
}
