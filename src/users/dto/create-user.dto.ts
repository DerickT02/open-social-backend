import { ApiProperty } from "@nestjs/swagger";


/*userData: {
    email: string, 
    firstName: string, 
    lastName: string, 
    userName: string, 
    password: string,
    bio: string
}
    */
export class CreateUserDto{
    @ApiProperty()
    email: string

    @ApiProperty() 
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    userName: string 

    @ApiProperty()
    password: string

    @ApiProperty()
    bio: string

   


}