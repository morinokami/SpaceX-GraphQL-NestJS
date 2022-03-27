import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

export type LandpadStatus =
  | 'active'
  | 'inactive'
  | 'unknown'
  | 'retired'
  | 'lost'
  | 'under construction';

@ObjectType({ description: 'Landpad Images' })
class LandpadImages {
  @Field(() => [String], { nullable: true })
  large?: string[];
}

@ObjectType({ description: 'Landpad' })
export class Landpad {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  fullName?: string;

  @Field()
  status: LandpadStatus;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  locality?: string;

  @Field({ nullable: true })
  region?: string;

  @Field({ nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  longitude?: number;

  @Field(() => Int)
  landingAttempts: number;

  @Field(() => Int)
  landingSuccesses: number;

  @Field({ nullable: true })
  wikipedia?: string;

  @Field({ nullable: true })
  details?: string;

  @Field(() => [Launch])
  launches: Launch[];

  @HideField()
  launchIds: string[];

  @Field(() => LandpadImages, { nullable: true })
  images?: LandpadImages;
}
