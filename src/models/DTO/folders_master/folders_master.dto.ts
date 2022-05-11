import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import decimal from 'decimal.js';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

               //cloud_file_storage
export class Folders_masterDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  folder_id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  folder_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  is_the_folder_shared: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  created_by_user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  created_date_time: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  folder_size: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  deleted_status: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mapping_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mapping_parent: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  file_or_folder: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  file_or_folder_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  customer_id: string;

}
