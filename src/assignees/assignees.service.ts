import { Injectable } from '@nestjs/common';
import { CreateAssigneeInput } from './dto/create-assignee.input';
import { UpdateAssigneeInput } from './dto/update-assignee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignee } from './assignee.model';
import { Repository } from 'typeorm';

@Injectable()
export class AssigneesService {
  constructor(
    @InjectRepository(Assignee)
    private assigneeRepository: Repository<Assignee>,
  ) {}

  create(createAssigneeInput: CreateAssigneeInput) {
    const newAssignee = this.assigneeRepository.create(createAssigneeInput);

    return this.assigneeRepository.save(newAssignee);
  }

  findAll() {
    return this.assigneeRepository.find();
  }

  findOne(id: number) {
    return this.assigneeRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateAssigneeInput: UpdateAssigneeInput) {
    return this.assigneeRepository.update({ id }, updateAssigneeInput);
  }

  async remove(id: number) {
    const assignee = await this.findOne(id);

    return this.assigneeRepository.remove(assignee);
  }
}
