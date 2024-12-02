import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Todo } from '../todos/todo.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Assignee {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Todo, todo => todo.assignee)
  @Field(type => [Todo], { nullable: true })
  todos?: Todo[];
}
