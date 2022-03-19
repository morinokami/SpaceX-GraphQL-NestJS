import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { Ship } from 'src/ships/models/ship.model';

@ObjectType({ description: 'Launch' })
export class Launch {
  @Field(() => ID)
  id: string;

  @Field()
  flightNumber: number;

  @Field()
  name: string;

  @Field(() => [Ship])
  ships: Ship[];

  @Field(() => [Capsule])
  capsules: Capsule[];

  @HideField()
  shipIds: string[];

  @HideField()
  capsuleIds: string[];

  // TODO: other fields
}
