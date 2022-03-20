import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

@ObjectType({ description: 'Ship' })
export class Ship {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  legacyId?: string;

  @Field({ nullable: true })
  model?: string;

  @Field({ nullable: true })
  type?: string;

  @Field(() => [String])
  roles: string[];

  @Field()
  active: boolean;

  @Field(() => Int, { nullable: true })
  imo?: number;

  @Field(() => Int, { nullable: true })
  mmsi?: number;

  @Field(() => Int, { nullable: true })
  abs?: number;

  @Field(() => Int, { nullable: true })
  class?: number;

  @Field(() => Int, { nullable: true })
  massLbs?: number;

  @Field(() => Int, { nullable: true })
  yearBuilt?: number;

  @Field({ nullable: true })
  homePort?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  speedKn?: number;

  @Field({ nullable: true })
  courseDeg?: number;

  @Field({ nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  longitude?: number;

  @Field({ nullable: true })
  lastAisUpdate?: string;

  @Field({ nullable: true })
  link?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => [Launch])
  launches: Launch[];

  @HideField()
  launchIds: string[];
}
