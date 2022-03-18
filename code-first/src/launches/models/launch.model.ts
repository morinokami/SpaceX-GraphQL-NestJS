import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Launch' })
export class Launch {
  @Field(() => ID)
  id: string;

  @Field()
  flightNumber: number;

  @Field()
  name: string;

  // TODO: other fields
}
