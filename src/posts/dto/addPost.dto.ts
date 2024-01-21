import { ApiProperty } from "@nestjs/swagger";

export default class addPostDTO{
    
    @ApiProperty()
    authorId: number

    @ApiProperty()
    content: string[]

    @ApiProperty()
    caption: string

}