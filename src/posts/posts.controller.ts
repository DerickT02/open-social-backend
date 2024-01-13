import { Controller, Get } from "@nestjs/common";
import { PostService } from "./posts.service";

//set the path of this route to "posts"
/*
PostService: Holds all the functions for the service for the routes starting with "/posts"
*/
@Controller("posts")
export class PostsController{
    constructor(private postService: PostService) {}

    @Get()
    getPost(){
        return this.postService.getPosts()
    }

    //
    
    
}

