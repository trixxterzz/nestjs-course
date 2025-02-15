import { UsersRepository } from './users.repository';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
