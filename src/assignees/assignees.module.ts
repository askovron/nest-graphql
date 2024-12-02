import { Module } from '@nestjs/common';
import { AssigneesService } from './assignees.service';
import { AssigneesResolver } from './assignees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignee } from './assignee.model';

@Module({
  imports: [TypeOrmModule.forFeature([Assignee])],
  providers: [AssigneesResolver, AssigneesService],
  exports: [AssigneesService],
})
export class AssigneesModule {}
