import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post(':id/comments')
  @UseGuards(ApiKeyGuard)
  createComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.postsService.createComment(id, createCommentDto);
  }
}
