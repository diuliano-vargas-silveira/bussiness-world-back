import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  private readonly boards: Board[] = [];

  create(board: Board) {
    this.boards.push(board);
  }

  findAll(): Board[] {
    return this.boards;
  }
}
