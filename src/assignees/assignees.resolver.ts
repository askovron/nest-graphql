import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssigneesService } from './assignees.service';
import { Assignee } from './assignee.model';
import { CreateAssigneeInput } from './dto/create-assignee.input';
import { UpdateAssigneeInput } from './dto/update-assignee.input';

@Resolver(() => Assignee)
export class AssigneesResolver {
  constructor(private readonly assigneesService: AssigneesService) {}

  @Mutation(() => Assignee)
  createAssignee(
    @Args('createAssigneeInput') createAssigneeInput: CreateAssigneeInput,
  ) {
    return this.assigneesService.create(createAssigneeInput);
  }

  @Query(() => [Assignee], { name: 'assignees' })
  findAll() {
    return this.assigneesService.findAll();
  }

  @Query(() => Assignee, { name: 'assignee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assigneesService.findOne(id);
  }

  @Mutation(() => Assignee)
  updateAssignee(
    @Args('updateAssigneeInput') updateAssigneeInput: UpdateAssigneeInput,
  ) {
    return this.assigneesService.update(
      updateAssigneeInput.id,
      updateAssigneeInput,
    );
  }

  @Mutation(() => Assignee)
  removeAssignee(@Args('id', { type: () => Int }) id: number) {
    return this.assigneesService.remove(id);
  }
}
