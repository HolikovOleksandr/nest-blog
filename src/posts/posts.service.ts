import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postsRepository.createOne(createPostDto);
  }

  async findAll() {
    return await this.postsRepository.findAllPosts();
  }

  async findOne(id: string) {
    return await this.postsRepository.findOnePost(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await this.postsRepository.findOneAndUpdate(id, updatePostDto);
  }

  async remove(id: string) {
    return await this.postsRepository.findOneAndRemove(id);
  }
}
