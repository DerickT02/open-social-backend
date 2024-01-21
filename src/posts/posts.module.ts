import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostService } from "./posts.service";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    controllers:[PostsController],
    providers:[PostService, PrismaService]
    
})

export class PostsModule {};