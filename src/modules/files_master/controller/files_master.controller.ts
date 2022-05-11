/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpStatus, Post,Get, Param,Put, Delete} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ResponseInterface from 'src/common/interface/response.interface';
import { Files_master } from 'src/models/entities/files_master/files_master.entity';
import { Files_masterService } from '../service/files_master.service';


@ApiTags("Files_masterController")
@Controller()
export class Files_masterController {
    constructor(private readonly filesmasterService: Files_masterService) {  
}

@Post('/insertFilesMaster')
async insertFilesmaster(@Body() data: Files_master): Promise<ResponseInterface> {
  const result = await this.filesmasterService.insertFilesmaster(data);
  return {statusCode: HttpStatus.CREATED,message: 'insert Filesmaster successfully !!'};
  }

@Get('/getFilesMaster/:customer_id/:user_id')
async getFilesMaster(@Param('customer_id') customer_id: string,@Param('user_id') user_id: number): Promise<ResponseInterface> {
  const file_master_data = await this.filesmasterService.getFilesmaster(customer_id,user_id);
  return {statusCode: HttpStatus.CREATED,message: 'Data Fetch Successfully !!',data:file_master_data};
  }



@Put('/updateFilesMaster')
async updateFilesMaster(@Body() data: Files_master): Promise<ResponseInterface> {
  const result = await this.filesmasterService.updateFilesMaster(data);
  return {statusCode: HttpStatus.CREATED,message: 'Update Filesmaster Successfully !!'};
  }



  @Put('/fileRename')
  async fileRename(@Body() data: Files_master): Promise<ResponseInterface> {
    const result = await this.filesmasterService.fileRename(data);
    return {statusCode: HttpStatus.CREATED,message: 'Files Renamed Successfully !!'};
    }


    @Delete('/updateFileDeleteStatus')
    async updateFileDeleteStatus(@Body() data: Files_master): Promise<ResponseInterface> {
      const result = await this.filesmasterService.updateFileDeleteStatus(data);
      return {statusCode: HttpStatus.CREATED,message: 'Update File DeleteStatus Successfully !!'};
      }



}

