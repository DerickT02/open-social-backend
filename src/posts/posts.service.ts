import { Injectable } from "@nestjs/common";
import addUserDTO from "./dto/addPost.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, Post } from "@prisma/client";


@Injectable()
export class PostService{
    //put prisma logic for posts inside here
    constructor(private prisma: PrismaService){}
    async getPosts(){
        let allPosts = this.prisma.post.findMany(); 
        return allPosts
    }

    async addPost(data: Prisma.PostCreateInput): Promise<Post>{
       return this.prisma.post.create({
            data:data
       })
    }
}