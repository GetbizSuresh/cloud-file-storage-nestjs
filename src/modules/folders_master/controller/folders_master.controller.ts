import { Controller, Post, Body, HttpStatus,Get, Param, Put, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import ResponseInterface from "src/common/interface/response.interface";
import { Folders_master } from "src/models/entities/folders_master/folders.entity";
import { Folders_masterService } from "../service/folders_master.service";

@ApiTags("Folders_masterController")
@Controller()
export class Folders_masterController {
    constructor(private readonly foldersmasterService: Folders_masterService) {  
    }
    
    
@Post('/insertFoldersMaster')
async createFoldermaster(@Body() data: Folders_master): Promise<ResponseInterface> {
  const result = await this.foldersmasterService.insertFoldersmaster(data);
  return {statusCode: HttpStatus.CREATED,message: 'insert foldermaster successfully'};
  }



  @Get('/getFoldersMaster/:customer_id/:user_id')
async getFoldersMaster(@Param('customer_id') customer_id: string,@Param('user_id') user_id: number): Promise<ResponseInterface> {
  const result = await this.foldersmasterService.getFoldersMaster(customer_id,user_id);
  return {statusCode: HttpStatus.CREATED,message: 'Data Fetch successfully !!',data:result};
  }


  @Put('/updateFoldersMaster')
async updateFoldersMaster(@Body() data: Folders_master): Promise<ResponseInterface> {
  const result = await this.foldersmasterService.updateFoldersMaster(data);
  return {statusCode: HttpStatus.CREATED,message: 'update folder master successfully  !!'};
  }


  @Put('/folderRename')
  async folderRename(@Body() data: Folders_master): Promise<ResponseInterface> {
    const result = await this.foldersmasterService.folderRename(data);
    return {statusCode: HttpStatus.CREATED,message: 'folder Renamed successfully  !!'};
    }


    @Put('/updateFolderDeleteStatus')
    async updateFolderDeleteStatus(@Body() data: Folders_master): Promise<ResponseInterface> {
      const result = await this.foldersmasterService.updateFolderDeleteStatus(data);
      return {statusCode: HttpStatus.CREATED,message: 'update Folder DeleteStatus successfully  !!'};
      }



      @Delete('/deleteFolderPermanently')
      async deleteFolderPermanently(@Param('user_id') user_id: number,@Param('folder_id') folder_id: number,@Param('customer_id') customer_id: string,@Param('mapping_id') mapping_id:string): Promise<ResponseInterface> {
        const result = await this.foldersmasterService.deleteFolderPermanently(user_id,folder_id,customer_id,mapping_id);
        return {statusCode: HttpStatus.CREATED,message: ' Folder Deleted Permanently !!'};
        }
    

    



  






}
