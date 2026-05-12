import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post(':id/comments')
  createComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.postsService.createComment(createCommentDto);
  }
}
