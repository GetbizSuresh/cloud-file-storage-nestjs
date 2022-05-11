import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";
import decimal from 'decimal.js';


export class Files_masterDto {


  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  file_id: number;

  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  file_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  multiuser_file_access: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  file_type: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  uploaded_created_by_user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  uploaded_created_utc_date_time: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  file_storage_url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  deleted_status: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  file_size: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  customer_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mapping_id: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mapping_parent: string;


}
