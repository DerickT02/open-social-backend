import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { PostService } from "./posts.service";
import addPostDTO from "./dto/addPost.dto"
import { ApiParam } from "@nestjs/swagger";
import GetPostByIdDTO from "./dto/getPostById.dto";

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

    @Post("addPost")
    addPost(@Body() addPostDTO: addPostDTO){
        this.postService.addPost(addPostDTO)
    }

    @Get(':id')
    @ApiParam({name: "id", required: true})
    getPostFromUser(@Param('id', ParseIntPipe) id: number){
        return this.postService.getPostFromUser(id)
    }

    
    
    
}

