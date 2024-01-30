import { Types } from 'mongoose';

export class PostDo {
  _id: Types.ObjectId;
  title: string;
  link: string;
  description: string;
  createdAt: Date;
  guid: string;

  constructor(prop: Partial<PostDo>) {
    this._id = prop._id;
    this.title = prop.title || null;
    this.link = prop.link || null;
    this.description = prop.description || null;
    this.createdAt = prop.createdAt || null;
    this.guid = prop.guid || null;
  }
}
