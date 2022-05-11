import { Injectable, ParseIntPipe } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { RegistrationDto } from 'src/models/DTO/registration/registration.dto';
import { Registration } from 'src/models/entities/registration/registration.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationService {
    create(data: RegistrationDto) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Registration, 'cloud_file_storage')
        @InjectConnection('cloud_file_storage')
        private readonly registrationRepository: Repository<Registration>,
    ){}

    async createNewUser(newUser: RegistrationDto): Promise<Registration> {
      try {
        return await this.registrationRepository.save(newUser);
      } catch (error) {
        throw error;
      }
    }

    async getAllUsers(): Promise<Registration[]> {
      try {
        return await this.registrationRepository.find();
      } catch (error) {
        throw error;
      }
    }

    async deleteUser(id: string): Promise<boolean> {
      try {
        const result = await this.registrationRepository.delete(id);
  
        return result.affected === 0 ? false : true;
      } catch (error) {
        throw error;
      }
    }


    async creatDynamicDatabase(customer_id,user_id): Promise<any> {
      let p_user_id= user_id;
      let p_customer_id = customer_id;
      return await this.registrationRepository.query(`CALL cloud_file_storage.SP_CreateDynamicDatabase
      (
          ${p_user_id},
         '${p_customer_id}'
      )`);}  
       
      
}










