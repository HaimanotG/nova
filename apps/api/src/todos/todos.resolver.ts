import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { CreateOneTodoArgs, DeleteOneTodoArgs, FindUniqueTodoArgs, Todo, UpdateOneTodoArgs } from '@nova/api/generated-db-types';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation(() => Todo)
  createTodo(@Args() createOneTodoArgs: CreateOneTodoArgs) {
    return this.todosService.create(createOneTodoArgs);
  }

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todosService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args() findUniqueTodoArgs: FindUniqueTodoArgs) {
    return this.todosService.findOne(findUniqueTodoArgs);
  }

  @Mutation(() => Todo)
  updateTodo(@Args() updateOneTodoArgs: UpdateOneTodoArgs) {
    return this.todosService.update(updateOneTodoArgs);
  }

  @Mutation(() => Todo)
  removeTodo(@Args() deleteOneTodoArgs: DeleteOneTodoArgs) {
    return this.todosService.remove(deleteOneTodoArgs);
  }
}
