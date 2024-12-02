import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.model';
// import { Assignee } from '../assignees/assignee.model';
import { AssigneesModule } from '../assignees/assignees.module';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), AssigneesModule],
  providers: [TodosService, TodosResolver],
})
export class TodosModule {}
