import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({database:'cloud_file_storage',name:'folders_master'})                  //cloud_file_storage
export class Folders_master {
  
  @PrimaryGeneratedColumn()
  @ApiProperty()
  folder_id: number;

  @ApiProperty()
  @Column()
  folder_name: string;

  @ApiProperty()
  @Column()
  is_the_folder_shared: boolean;

  @ApiProperty()
  @Column()
  created_by_user_id: number;

  @ApiProperty()
  @Column()
  created_date_time: string;

  @ApiProperty()
  @Column()
  folder_size: number;

  @ApiProperty()
  @Column()
  deleted_status: boolean;

  @ApiProperty()
  @Column()
  mapping_id: string;

  @ApiProperty()
  @Column()
  mapping_parent: string;

  @ApiProperty()
  @Column()
  file_or_folder: boolean;

  @ApiProperty()
  @Column()
  file_or_folder_id: number;


  @ApiProperty()
  @Column()
  customer_id: string;
  
}
