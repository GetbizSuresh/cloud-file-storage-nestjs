/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Files_master } from 'src/models/entities/files_master/files_master.entity';
import { Files_masterController } from './controller/files_master.controller';
import { Files_masterService } from './service/files_master.service';

@Module({
  imports: [TypeOrmModule.forFeature([Files_master],'cloud_file_storage'),],
  controllers: [Files_masterController],
  providers: [Files_masterService],
  exports: [Files_masterService],
})
export class Files_masterModule {}
