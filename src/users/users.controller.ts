import { Controller, Get, Post, Body, ParseIntPipe, Param, } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";
import { ApiParam } from "@nestjs/swagger";
import * as bycrpt from 'bcrypt'

import { CreateUserDto } from "./dto/create-user.dto";
import { FollowUserDTO } from "./dto/followuser.dto";
import { UserLoginDto } from "./dto/userlogin.dto";

const roundsOfHashing = 10;

/*
UsersService: Holds all the functions for the service for the routes starting with "/users"
*/

@Controller("users")
export class UsersController{
    constructor(private userService: UsersService) {}

    //get one user
    @Get()
    getUser(){
        return this.userService.getUsers()
    }

    @Post("/create")
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User>{
        //you can access createUserDto fields
        const hashPassword = await bycrpt.hash(createUserDto.password, roundsOfHashing);
        createUserDto.password = hashPassword
        return this.userService.createUser(createUserDto);
    }

    @Post("/login")
    async login(@Body() userLoginDto: UserLoginDto): Promise<string>{
        const email = userLoginDto.email
        const password = userLoginDto.password
        return this.userService.authenticateUser(email,password)
    }

    @Get(':id')
    @ApiParam({name: "id", required: true})
    async getOneUser(@Param('id', ParseIntPipe) id: number){
        return this.userService.getOneUser(id)
    }

    @Get(':id/following')
    @ApiParam({name: "id", required: true})
    async getFollowing(@Param('id', ParseIntPipe) id: number){
        return this.userService.getFollowing(id)
    }

    @Post("/follow")
    async follow(@Body() followUserDto: FollowUserDTO){
       
        return this.userService.followUser(followUserDto.currentUserID, followUserDto.targetUserID)
    }


    





    
    

    //get users followers

    //get users following list

    //add user to following and add user to followers

    //remove user from following

    //remove user from followers

}