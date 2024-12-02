import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Assignee } from '../assignees/assignee.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true, defaultValue: false })
  completed?: boolean;

  @Column({ nullable: true })
  @Field({ nullable: true })
  createdAt?: string;

  @Column()
  @Field(type => Int)
  assigneeId: number;

  @ManyToOne(() => Assignee, assignee => assignee.todos)
  @Field(type => Assignee)
  assignee: Assignee;
}
