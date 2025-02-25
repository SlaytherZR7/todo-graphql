import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Aggregations for todos' })
export class AggregationsType {
  @Field(() => Int, { description: 'Total number of todos' })
  totalTodos: number;

  @Field(() => Int, { description: 'Total number of completed todos' })
  completedTodos: number;

  @Field(() => Int, { description: 'Total number of pending todos' })
  pendingTodos: number;

  @Field(() => Int, {
    description: 'Total number of todos',
    deprecationReason: 'Use totalTodos instead',
  })
  totalTodosObsolet: number;
}
