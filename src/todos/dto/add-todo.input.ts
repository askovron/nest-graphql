import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, Length } from 'class-validator';

@InputType()
export class AddTodoInput {
  @Length(3)
  @IsAlpha()
  @Field()
  name: string;

  @Field(type => Int)
  assigneeId: number;
}
