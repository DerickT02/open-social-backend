import { Global, Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
    controllers: [UsersController],
    providers:[UsersService, PrismaService],
    exports:[UsersService],
   
})

export class UserModule {};