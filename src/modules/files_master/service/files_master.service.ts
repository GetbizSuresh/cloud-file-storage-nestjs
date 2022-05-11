import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Files_masterDto } from 'src/models/DTO/files_master/files_master.dto';
import { Files_master } from 'src/models/entities/files_master/files_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Files_masterService {
 
  constructor(
    @InjectRepository(Files_master, 'cloud_file_storage')
    @InjectConnection('cloud_file_storage')
    private readonly filesmasterRepository: Repository<Files_master>,
  ) {}

  
  async insertFilesmaster(obj_Files_masterDto: Files_masterDto): Promise<any> { 
    let p_file_name = obj_Files_masterDto.file_name;
    let p_multiuser_file_access = obj_Files_masterDto.multiuser_file_access;
    let p_file_type = obj_Files_masterDto.file_type;
    let p_uploaded_created_by_user_id = obj_Files_masterDto.uploaded_created_by_user_id;
    let p_file_storage_url = obj_Files_masterDto.file_storage_url;
    let p_uploaded_created_utc_date_time = obj_Files_masterDto.uploaded_created_utc_date_time;
    let p_file_size = obj_Files_masterDto.file_size;
    let p_deleted_status = obj_Files_masterDto.deleted_status;
    let p_customer_id = obj_Files_masterDto.customer_id;
    let p_mapping_id = obj_Files_masterDto.mapping_id;
    let p_mapping_parent = obj_Files_masterDto.mapping_parent;

      await this.filesmasterRepository
      .query(`CALL cloud_file_storage.SP_InsertFilesMaster
       (
       '${p_file_name}', ${p_multiuser_file_access},
       '${p_file_type}',${p_uploaded_created_by_user_id},
       '${p_file_storage_url}','${p_uploaded_created_utc_date_time}',
        ${p_file_size}, ${p_deleted_status},'${p_customer_id}' 
       )`);
     
       let p_max_file_id = await this.filesmasterRepository.query(`select max(file_id) as MaxId from ${p_customer_id}_cloud_file_storage_app_db.5_userapp_files_master;`).then(data=>data[0].MaxId) ;

       await this.filesmasterRepository.query(`CALL cloud_file_storage.SP_InsertDynamicFileUserPermission
       (
         ${p_max_file_id},
         ${p_uploaded_created_by_user_id},
        '${p_uploaded_created_utc_date_time}',
        '${p_mapping_id}',
        '${p_mapping_parent}',
        '${p_customer_id}'
       )`);         
  }


  async deleteUser(id: string): Promise<boolean> {
    try {
      const result = await this.filesmasterRepository.delete(id);

      return result.affected === 0 ? false : true;
    } catch (error) {
      throw error;
    }
  }

       async getFilesmaster(customer_id:string,user_id:number): Promise<any> { 
        let p_customer_id = customer_id;
        let p_user_id = user_id;

        let file_master_data = await this.filesmasterRepository.query(`CALL cloud_file_storage.SP_GetFileMaster
        (
          '${p_customer_id}',
          ${p_user_id}
          )`);      
        return file_master_data;
      }



      async updateFilesMaster(obj_Files_masterDto: Files_masterDto): Promise<any> { 
        let p_file_id = obj_Files_masterDto.file_id;
        let p_file_name = obj_Files_masterDto.file_name;
        let p_multiuser_file_access = obj_Files_masterDto.multiuser_file_access;
        let p_file_type = obj_Files_masterDto.file_type;
        let p_uploaded_created_by_user_id = obj_Files_masterDto.uploaded_created_by_user_id;
        let p_file_storage_url = obj_Files_masterDto.file_storage_url;
        let p_uploaded_created_utc_date_time = obj_Files_masterDto.uploaded_created_utc_date_time;
        let p_file_size = obj_Files_masterDto.file_size;
        let p_deleted_status = obj_Files_masterDto.deleted_status;
        let p_customer_id = obj_Files_masterDto.customer_id;
    
    
          await this.filesmasterRepository
          .query(`CALL cloud_file_storage.SP_UpdateFilesMaster
           ( 
            ${p_file_id}, '${p_file_name}', ${p_multiuser_file_access},
           '${p_file_type}',${p_uploaded_created_by_user_id},
           '${p_file_storage_url}','${p_uploaded_created_utc_date_time}',
            ${p_file_size}, ${p_deleted_status},'${p_customer_id}' 
           )`);           
      }


    

      async fileRename(obj_Files_masterDto: Files_masterDto): Promise<any> { 
        let p_file_id = obj_Files_masterDto.file_id;
        let p_uploaded_created_by_user_id = obj_Files_masterDto.uploaded_created_by_user_id;
        let p_file_name = obj_Files_masterDto.file_name;
        let p_customer_id = obj_Files_masterDto.customer_id;
        let p_uploaded_created_utc_date_time = obj_Files_masterDto.uploaded_created_utc_date_time;

        await this.filesmasterRepository.query(`CALL cloud_file_storage.SP_FileRename
        (
          ${p_file_id},
          ${p_uploaded_created_by_user_id},
          '${p_file_name}',
          '${p_customer_id}',
          '${p_uploaded_created_utc_date_time}'
          )`);      
       }



       async updateFileDeleteStatus(obj_Files_masterDto: Files_masterDto): Promise<any> { 
        let p_file_id = obj_Files_masterDto.file_id;
        let p_deleted_status = obj_Files_masterDto.deleted_status;
        let p_customer_id = obj_Files_masterDto.customer_id;

        await this.filesmasterRepository.query(`CALL cloud_file_storage.SP_UpdateFileDeleteStatus
        (
           ${p_file_id},
           ${p_deleted_status},
          '${p_customer_id}'    
          )`);      
       }










}
