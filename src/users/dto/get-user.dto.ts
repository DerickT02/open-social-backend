import { ApiProperty } from '@nestjs/swagger';

export class GetUserDTO{
    
    @ApiProperty() 
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    userName: string 

    
    @ApiProperty()
    bio: string

   


}