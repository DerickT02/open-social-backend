import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, User } from '@prisma/client';
import * as bycrpt from 'bcrypt'


@Injectable()
export class UsersService{
    constructor(private prisma: PrismaService){}

    async getUsers(){
        const users = await this.prisma.user.findMany()
        return users;
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User>{
        return this.prisma.user.create({
            data: data,
        })
    }

    async authenticateUser(email: string, password: string): Promise<string> {
        const user = await this.prisma.user.findUnique({where: {email: email}});
        if (!user){
            throw new NotFoundException(`User with email ${email}`)
        }

        const validatePassword = await bycrpt.compare(password, user.password)

        if(!validatePassword){
            throw new UnauthorizedException("Wrong password, try again")
        }

        return "User Logged In"
    }

 //put prisma logic for users inside here
}
