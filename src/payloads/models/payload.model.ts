import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { Launch } from 'src/launches/models/launch.model';

@ObjectType({ description: 'Payload Dragon' })
export class PayloadDragon {
  @Field(() => Capsule, { nullable: true })
  capsule?: Capsule;

  @Field({ nullable: true })
  massReturnedKg?: number;

  @Field({ nullable: true })
  massReturnedLbs?: number;

  @Field(() => Int, { nullable: true })
  flightTimeSec?: number;

  @Field({ nullable: true })
  manifest?: string;

  @Field({ nullable: true })
  waterLanding?: boolean;

  @Field({ nullable: true })
  landLanding?: boolean;

  @HideField()
  capsuleId?: string;
}

@ObjectType({ description: 'Payload' })
export class Payload {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  type?: string;

  @Field()
  reused: boolean;

  @Field(() => Launch, { nullable: true })
  launch?: Launch;

  @Field(() => [String])
  customers: string[];

  @Field(() => [Int])
  noradIds: number[];

  @Field(() => [String])
  nationalities: string[];

  @Field(() => [String])
  manufacturers: string[];

  @Field({ nullable: true })
  massKg?: number;

  @Field({ nullable: true })
  massLbs?: number;

  @Field({ nullable: true })
  orbit?: string;

  @Field({ nullable: true })
  referenceSystem?: string;

  @Field({ nullable: true })
  regime?: string;

  @Field({ nullable: true })
  longitude?: number;

  @Field({ nullable: true })
  semiMajorAxisKm?: number;

  @Field({ nullable: true })
  eccentricity?: number;

  @Field({ nullable: true })
  periapsisKm?: number;

  @Field({ nullable: true })
  apoapsisKm?: number;

  @Field({ nullable: true })
  inclinationDeg?: number;

  @Field({ nullable: true })
  periodMin?: number;

  @Field({ nullable: true })
  lifespanYears?: number;

  @Field({ nullable: true })
  epoch?: string;

  @Field({ nullable: true })
  meanMotion?: number;

  @Field({ nullable: true })
  raan?: number;

  @Field({ nullable: true })
  argOfPericenter?: number;

  @Field({ nullable: true })
  meanAnomaly?: number;

  @Field(() => PayloadDragon)
  dragon: PayloadDragon;

  @HideField()
  launchId: string;
}
