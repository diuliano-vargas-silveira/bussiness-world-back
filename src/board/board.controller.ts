import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    this.boardService.create(createBoardDto);
  }

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }
}
