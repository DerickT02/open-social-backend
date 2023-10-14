import { Controller, Get } from "@nestjs/common";


//set the path of this route to "posts"
@Controller("posts")
export class PostsController{
    @Get()
    getPost(){
        return "Woke up like this"
    }

    //
    
    
}

