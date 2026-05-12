import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Post(':id/posts')
  @UseGuards(ApiKeyGuard)
  createPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.usersService.createPost(id, createPostDto);
  }

  @Get(':id/posts')
  @UseGuards(ApiKeyGuard)
  findPosts(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findPosts(id);
  }
}
