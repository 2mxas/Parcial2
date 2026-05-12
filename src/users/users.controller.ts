import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post(':id/posts')
  createPost(@Param('id') id: string, @Body() createPostDto: any) {
    // Logic to create a post for the user with the given id
    return `This action adds a new post for user #${id}`;
  }

  @Get(':id/posts')
  findPosts(@Param('id') id: string) {
    // Logic to find all posts for the user with the given id
    return `This action returns all posts for user #${id}`;
  }
}
