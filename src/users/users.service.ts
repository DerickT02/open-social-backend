import { Injectable } from "@nestjs/common";


@Injectable()
export class UsersService{

    getUser(user: string): string{
        return user;
    }
}
