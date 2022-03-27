import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

export type LaunchpadStatus =
  | 'active'
  | 'inactive'
  | 'unknown'
  | 'retired'
  | 'lost'
  | 'under construction';

@ObjectType({ description: 'Launchpad' })
export class Launchpad {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  fullName?: string;

  @Field()
  status: LaunchpadStatus;

  @Field({ nullable: true })
  locality?: string;

  @Field({ nullable: true })
  region?: string;

  @Field({ nullable: true })
  timezone?: string;

  @Field({ nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  longitude?: number;

  @Field(() => Int)
  launchAttempts: number;

  @Field(() => Int)
  launchSuccesses: number;

  // TODO: Add rockets
  // @Field(() => [Rockets])
  // rockets: Rockets[];
  // @HideField()
  // rocketIds: string[];

  @Field(() => [Launch])
  launches: Launch[];

  @HideField()
  launchIds: string[];
}
