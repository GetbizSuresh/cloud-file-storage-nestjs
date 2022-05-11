/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormOrmConfig } from 'src/helpers/typeorm.helpers';
import { Folders_masterController } from './controller/folders_master.controller';
import { Folders_masterService } from './service/folders_master.service';

@Module({
    imports: [
        TypeOrmModule.forRoot(
          typeormOrmConfig('cloud_file_storage', {
            name: 'cloud_file_storage',
          }),
        ),],
    controllers: [Folders_masterController],
    providers: [Folders_masterService],
})
export class Folders_masterModule {}
