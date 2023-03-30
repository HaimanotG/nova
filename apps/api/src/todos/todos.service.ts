import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nova/api/data-access-db';
import { CreateOneTodoArgs, DeleteOneTodoArgs, FindUniqueTodoArgs, UpdateOneTodoArgs } from '@nova/api/generated-db-types';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) { }
  create(createOneTodoArgs: CreateOneTodoArgs) {
    return this.prisma.todo.create(createOneTodoArgs)
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(findUniqueTodoArgs: FindUniqueTodoArgs) {
    return this.prisma.todo.findUnique(findUniqueTodoArgs);
  }

  update(updateOneTodoArgs: UpdateOneTodoArgs) {
    return this.prisma.todo.update(updateOneTodoArgs);
  }

  remove(deleteOneTodoArgs: DeleteOneTodoArgs) {
    return this.prisma.todo.delete(deleteOneTodoArgs);
  }
}
