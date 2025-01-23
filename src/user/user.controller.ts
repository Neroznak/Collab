import {Body, Controller, Get, Param, Patch, Post, Query,} from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.getById(+id);
  }

  @Get('')
  getByEmail(@Query('email') email: string) {
    return this.userService.getByEmail(email);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }


}
