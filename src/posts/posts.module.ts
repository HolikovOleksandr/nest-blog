import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post, PostSchema } from '../schemas/post.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsRepository } from './posts.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
})
export class PostsModule {}
