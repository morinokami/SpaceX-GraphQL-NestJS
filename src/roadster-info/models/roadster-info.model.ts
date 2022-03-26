import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Roadster Info' })
export class RoadsterInfo {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  launchDateUtc?: string;

  @Field(() => Int, { nullable: true })
  launchDateUnix?: number;

  @Field(() => Int, { nullable: true })
  launchMassKg?: number;

  @Field(() => Int, { nullable: true })
  launchMassLbs?: number;

  @Field(() => Int, { nullable: true })
  noradId?: number;

  @Field({ nullable: true })
  epochJd?: number;

  @Field({ nullable: true })
  orbitType?: string;

  @Field({ nullable: true })
  apoapsisAu?: number;

  @Field({ nullable: true })
  periapsisAu?: number;

  @Field({ nullable: true })
  semiMajorAxisAu?: number;

  @Field({ nullable: true })
  eccentricity?: number;

  @Field({ nullable: true })
  inclination?: number;

  @Field({ nullable: true })
  longitude?: number;

  @Field({ nullable: true })
  periapsisArg?: number;

  @Field({ nullable: true })
  periodDays?: number;

  @Field({ nullable: true })
  speedKph?: number;

  @Field({ nullable: true })
  speedMph?: number;

  @Field({ nullable: true })
  earthDistanceKm?: number;

  @Field({ nullable: true })
  earthDistanceMi?: number;

  @Field({ nullable: true })
  marsDistanceKm?: number;

  @Field({ nullable: true })
  marsDistanceMi?: number;

  @Field(() => [String])
  flickrImages: string[];

  @Field({ nullable: true })
  wikipedia?: string;

  @Field({ nullable: true })
  video?: string;

  @Field({ nullable: true })
  details?: string;
}
