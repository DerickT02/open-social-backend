import { Injectable } from "@nestjs/common";


@Injectable()
export class PostService{
    //put prisma logic for posts inside here
    getPosts(): string{
        return "Hey Posts"
    }
}