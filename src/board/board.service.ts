import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const createdCat = new this.boardModel(createBoardDto);
    return createdCat.save();
  }

  async findAll(): Promise<Board[]> {
    return this.boardModel.find().exec();
  }
}
