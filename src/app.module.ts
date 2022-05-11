import { Folders_masterModule } from './modules/folders_master/folders_master.module';
import { Files_masterModule } from './modules/files_master/files_master.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormOrmConfig } from './helpers/typeorm.helpers';
import { Cloud_File_storage_users_masterModule } from './modules/cloud_File_storage_users_master/cloud_file_storage_users_master.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeormOrmConfig('cloud_file_storage', {
        name: 'cloud_file_storage',
      }),
    ),
    RegistrationModule,
    Files_masterModule,
    Folders_masterModule,
    Cloud_File_storage_users_masterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
