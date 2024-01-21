import { ApiProperty } from "@nestjs/swagger";
import { Post,  User} from "@prisma/client";

export class PostEntity implements Post{
    @ApiProperty()
    id: number
    
    @ApiProperty()
    authorId: number

    @ApiProperty()
    content: string[]

    @ApiProperty()
    caption: string
}