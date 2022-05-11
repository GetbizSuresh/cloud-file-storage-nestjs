import { Body, Controller, HttpStatus, Post,Get,Delete,Param, ParseIntPipe} from '@nestjs/common';
import ResponseInterface from 'src/common/interface/response.interface';
import { RegistrationDto } from 'src/models/DTO/registration/registration.dto';
import { RegistrationService } from '../service/registration.service';

@Controller()
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {  
}


@Post('/registration')
async createNewUser(@Body() data: RegistrationDto): Promise<ResponseInterface> {
  const newUser = await this.registrationService.createNewUser(data);
  return {statusCode: HttpStatus.CREATED,message: 'User created successfully'};
  }
  

  @Get('/GetUsers')
  async getAllUsers(): Promise<ResponseInterface> {
    const users = await this.registrationService.getAllUsers();
    return {statusCode: HttpStatus.OK,message: 'Users fetched successfully',data: users,};
  }



  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: string): Promise<ResponseInterface> {
    const isDeleted = await this.registrationService.deleteUser(id);
    if (!isDeleted) {
      return {statusCode: HttpStatus.NOT_FOUND,message: 'Employee Not Found',};
      }
    else{
      return {statusCode: HttpStatus.NOT_FOUND,message: 'Employee Deleted Successful !!',};
    }

  }
    
@Post('/creatDynamicDatabase/:customer_id/:user_id')
async creatDynamicDatabase(@Param('customer_id') customer_id: string,@Param('user_id') user_id: number): Promise<ResponseInterface> {
  const result = await this.registrationService.creatDynamicDatabase(customer_id,user_id);
  return {statusCode: HttpStatus.CREATED,message: 'Database created successful !!'};
  }
  


  
 
    


}