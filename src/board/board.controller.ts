import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async create(@Body() board: Board) {
    this.boardService.create(board);
  }

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }
}
