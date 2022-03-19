import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Ship' })
export class Ship {
  @Field(() => ID)
  id: string;
}
