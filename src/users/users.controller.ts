import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController{
    constructor(private userService: UsersService) {}

    //get one user
    @Get()
    getUser(){
        return this.userService.getUser("Derick");
    }

    @Get("derick")
    getDerick(){
        return "Derick gets all the ABGS"
    }


    //get users followers

    //get users following list

    //add user to following and add user to followers

    //remove user from following

    //remove user from followers

}