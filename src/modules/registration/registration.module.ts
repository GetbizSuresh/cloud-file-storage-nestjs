import { RegistrationService } from './service/registration.service';
import { RegistrationController } from './controller/registration.controller';
import { Module } from '@nestjs/common';
import { Registration } from 'src/models/entities/registration/registration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Registration],'cloud_file_storage'),],
  controllers: [RegistrationController],
  providers: [RegistrationService],
  exports: [RegistrationService],
})
export class RegistrationModule {}
