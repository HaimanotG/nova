import {
  Controller,
  Get,
} from '@nestjs/common';
import { PrismaService } from '@nova/api/data-access-db';


@Controller('todos')
export class TodosController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.todo.findMany();
  }
}