import { CreateAssigneeInput } from './create-assignee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssigneeInput extends PartialType(CreateAssigneeInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name?: string;
}
