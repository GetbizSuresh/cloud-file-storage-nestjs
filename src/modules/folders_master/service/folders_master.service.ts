import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Folders_masterDto } from 'src/models/DTO/folders_master/folders_master.dto';
import { Folders_master } from 'src/models/entities/folders_master/folders.entity';
import { Repository } from 'typeorm';



@Injectable()
export class Folders_masterService {
  constructor(
    // @InjectRepository(Folders_master, 'cloud_file_storage')
    @InjectConnection('cloud_file_storage')
    private readonly foldersmasterRepository: Repository<any>,
  ) {}


  async insertFoldersmaster(obj_Folders_masterDto: Folders_masterDto,): Promise<any> {
    let p_folder_name = obj_Folders_masterDto.folder_name;
    let p_is_the_folder_shared = obj_Folders_masterDto.is_the_folder_shared;
    let p_created_by_user_id = obj_Folders_masterDto.created_by_user_id;
    let p_created_date_time = obj_Folders_masterDto.created_date_time;
    let p_deleted_status = obj_Folders_masterDto.deleted_status;
    let p_folder_size = obj_Folders_masterDto.folder_size;
    let p_customer_id = obj_Folders_masterDto.customer_id;

    let p_mapping_id = obj_Folders_masterDto.customer_id;
    let p_mapping_parent = obj_Folders_masterDto.mapping_parent;



    
    var result = await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_InsertFolderMaster(
      '${p_folder_name}',
      ${p_is_the_folder_shared},
      ${p_created_by_user_id},
      ${p_folder_size},
      '${p_created_date_time}',
      ${p_deleted_status},
      '${p_customer_id}'
      )`);


    let p_max_folder_id = await this.foldersmasterRepository.query(`SELECT max(folder_id) as MaxId FROM  ${p_customer_id}_cloud_file_storage_app_db.5_userapp_folders_master`).then(data=>data[0].MaxId) ;

// console.log(p_max_folder_id[0].MaxId)

     await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_InsertDynamicFolderUserPermission
     (
       ${p_max_folder_id},
       ${p_created_by_user_id},
      '${p_created_date_time}',
      '${p_mapping_id}',
      '${p_mapping_parent}',
      '${p_customer_id}'
     )`);
  }


  async getFoldersMaster(customer_id:string,user_id:number): Promise<any> {
    let p_customer_id = customer_id;
    let p_user_id = user_id;

     var folder_master_data = await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_GetFolderMaster
     (
       '${p_customer_id}',
       ${p_user_id}
     )`);

     console.log(folder_master_data)
    return folder_master_data;

  }


  async updateFoldersMaster(obj_Folders_masterDto: Folders_masterDto): Promise<any> {
    let p_folder_id = obj_Folders_masterDto.folder_id;
    let p_folder_name = obj_Folders_masterDto.folder_name;
    let p_is_the_folder_shared = obj_Folders_masterDto.is_the_folder_shared;
    let p_created_by_user_id = obj_Folders_masterDto.created_by_user_id;
    let p_created_date_time = obj_Folders_masterDto.created_date_time;
    let p_deleted_status = obj_Folders_masterDto.deleted_status;
    let p_folder_size = obj_Folders_masterDto.folder_size;
    let p_customer_id = obj_Folders_masterDto.customer_id;


    var result = await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_UpdateFolderMaster(
      ${p_folder_id},
     '${p_folder_name}',
      ${p_is_the_folder_shared},
      ${p_created_by_user_id},
      ${p_folder_size},
     '${p_created_date_time}',
      ${p_deleted_status},
     '${p_customer_id}'
      )`);
    }


    async folderRename(obj_Folders_masterDto: Folders_masterDto): Promise<any> {
      let p_created_by_user_id = obj_Folders_masterDto.created_by_user_id;
      let p_folder_id = obj_Folders_masterDto.folder_id;
      let p_created_date_time = obj_Folders_masterDto.created_date_time;
      let p_folder_name = obj_Folders_masterDto.folder_name;
      let p_customer_id = obj_Folders_masterDto.customer_id;

       await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_FolderRename(
        ${p_created_by_user_id},
        ${p_folder_id},
       '${p_created_date_time}',
       '${p_folder_name}',
       '${p_customer_id}'

        )`);
      }



      async updateFolderDeleteStatus(obj_Folders_masterDto: Folders_masterDto): Promise<any> {
        let p_folder_id = obj_Folders_masterDto.folder_id;
        let p_deleted_status = obj_Folders_masterDto.deleted_status;
        let p_customer_id = obj_Folders_masterDto.customer_id;
  
         await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_UpdateFolderDeletedStatus(
          ${p_folder_id},
         ${p_deleted_status},
         '${p_customer_id}'
          )`);
        }




        async deleteFolderPermanently(user_id:number,folder_id:number,customer_id:string,mapping_id:string): Promise<any> {
          let p_user_id = user_id;
          let p_folder_id = folder_id;
          let p_customer_id = customer_id;
          let p_mapping_id = mapping_id;
    
           await this.foldersmasterRepository.query(`CALL cloud_file_storage.SP_DeleteFolderPermanently(
             ${p_user_id},
             ${p_folder_id},
            '${p_customer_id}',
            '${p_mapping_id}'
            )`);
          }
  









      






}






