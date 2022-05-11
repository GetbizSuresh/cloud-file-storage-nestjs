import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class RegistrationDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mobile_no: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  customer_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  photo_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  storage_limit_in_mb: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  block_app_access: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Authkey: string; 

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  entry_type: string; 


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  user_category: string; 

 



}
