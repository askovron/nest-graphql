import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddTodoInput } from './dto/add-todo.input';
import { AssigneesService } from '../assignees/assignees.service';
import { Assignee } from '../assignees/assignee.model';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
    private assigneeService: AssigneesService,
  ) {}

  addTodo(addTodoInput: AddTodoInput): Promise<Todo> {
    const newTodo = this.todosRepository.create({
      ...addTodoInput,
      createdAt: new Date().toString(),
    });

    return this.todosRepository.save(newTodo);
  }

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todosRepository.findOneOrFail({ where: { id } });
  }

  getAssignee(assigneeId: number): Promise<Assignee> {
    return this.assigneeService.findOne(assigneeId);
  }
}
