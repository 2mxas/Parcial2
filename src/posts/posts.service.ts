import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class PostsService {
  createComment(createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }
}
