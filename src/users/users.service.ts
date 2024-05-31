import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, User } from '@prisma/client';
import * as bycrpt from 'bcrypt'
import { GetUserDTO } from "./dto/get-user.dto";


@Injectable()
export class UsersService{
    constructor(private prisma: PrismaService){}

    async getUsers(){
        const users = await this.prisma.user.findMany()
        return users;
    }

    async getOneUser(userId: number) {
        const user = await this.prisma.user.findFirst({
            where:{
                id: userId
            }
        })
        
       if(user){
        let resultUser: GetUserDTO = {
            firstName: user.firstName,
            lastName: user.lastName,
            bio: user.bio,
            userName: user.userName 
        };

        return resultUser;
       }
        
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

    //async followUser(int currentUserID, int targetUserID)
    async followUser(currentUserID: number, targetUserID: number){
       return this.prisma.user.update(
        {
        where:{id: currentUserID},
        data:{
            following:{
                connect:{
                    id: targetUserID
                        }
                    }
                }
            }
        )
    }

    //get following
    async getFollowing(currentUserID: number){
        return this.prisma.user.findFirst({
            where:{
                id: currentUserID
            },
            include:{
                following: true
            }
        })
    }

    //async unfollowUser(int currentUserID, int targetUserID)
    //https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries
    async unfollowUser(){}


 //put prisma logic for users inside here
}
