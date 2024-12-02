import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';
import { AddTodoInput } from './dto/add-todo.input';
import { Assignee } from '../assignees/assignee.model';

@Resolver(of => Todo)
export class TodosResolver {
  constructor(private todoService: TodosService) {}

  @Query(returns => [Todo])
  todos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @ResolveField(returns => Assignee)
  assignee(@Parent() todo: Todo): Promise<Assignee> {
    return this.todoService.getAssignee(todo.assigneeId);
  }

  @Query(returns => Todo, { name: 'todo' })
  getTodo(@Args('id', { type: () => Int }) id: number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Mutation(returns => Todo)
  addTodo(@Args('addTodoInput') addTodoInput: AddTodoInput): Promise<Todo> {
    return this.todoService.addTodo(addTodoInput);
  }
}
