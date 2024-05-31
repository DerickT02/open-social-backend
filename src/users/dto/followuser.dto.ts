import { ApiProperty } from '@nestjs/swagger';

export class FollowUserDTO{
  
  @ApiProperty()
  currentUserID: number;

  @ApiProperty()
  targetUserID: number;
}