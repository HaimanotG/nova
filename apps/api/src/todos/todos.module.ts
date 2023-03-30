import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { PrismaService } from '@nova/api/data-access-db';
import { TodosController } from './todos.controller';

@Module({
  providers: [TodosResolver, TodosService, PrismaService, TodosController],
})
export class TodosModule {}
