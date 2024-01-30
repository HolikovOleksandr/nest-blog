import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDo } from 'src/schemas/post.do';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsRepository {
  constructor(@InjectModel('Post') private postModel: Model<PostDo>) {}

  async createOne(post: CreatePostDto): Promise<any> {
    return await this.postModel.create(post);
  }

  async findAllPosts(): Promise<any> {
    return await this.postModel.find();
  }

  async findOnePost(id: string): Promise<any> {
    return await this.postModel.findById(id);
  }

  async findOneAndUpdate(id: string, post: UpdatePostDto): Promise<any> {
    return await this.postModel.findByIdAndUpdate(id, post);
  }

  async findOneAndRemove(id: string): Promise<any> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
