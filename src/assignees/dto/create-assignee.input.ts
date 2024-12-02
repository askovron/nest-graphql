import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssigneeInput {
  @Field()
  name: string;
}
