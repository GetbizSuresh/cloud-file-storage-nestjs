import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import decimal from 'decimal.js';
import { ApiProperty } from '@nestjs/swagger';

@Entity({database:'cloud_file_storage',name:'files_master'})                  //cloud_file_storage
export class Files_master {
  
  @ApiProperty()
  @PrimaryGeneratedColumn()
  file_id: number;

  @ApiProperty()
  @Column()
  file_name: string;

  @ApiProperty()
  @Column()
  multiuser_file_access: boolean;

  @ApiProperty()
  @Column()
  file_type: number;

  @ApiProperty()
  @Column()
  uploaded_created_by_user_id: number;

  @ApiProperty()
  @Column()
  uploaded_created_utc_date_time: string;

  @ApiProperty()
  @Column()
  file_storage_url: string;

  @ApiProperty()
  @Column()
  deleted_status: boolean;

  @ApiProperty()
  @Column({
    type:'decimal'
  })
  file_size: number;

  @ApiProperty()
  @Column()
  customer_id: string;

  @ApiProperty()
  @Column()
  mapping_id: string;

  @ApiProperty()
  @Column()
  mapping_parent: string;

  @ApiProperty()
  @Column()
  is_folder: boolean;






}
