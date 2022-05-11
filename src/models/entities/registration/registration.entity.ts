import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({database:'cloud_file_storage',name:'registration'})                  //cloud_file_storage
export class Registration {
  
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  mobile_no: string;

  @Column()
  user_name: string;

  @Column()
  password: string;

  @Column()
  customer_id: string;

  @Column()
  user_id: number;

  @Column()
  photo_id: string;

  @Column()
  storage_limit_in_mb: number;

  @Column()
  block_app_access: boolean;
  
  @Column()
  Authkey: string; 

  @Column()
  entry_type: string; 

  @Column()
  user_category: string; 
}
