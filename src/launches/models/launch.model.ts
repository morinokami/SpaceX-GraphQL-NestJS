import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { Ship } from 'src/ships/models/ship.model';

export type DatePrecision =
  | 'half'
  | 'quarter'
  | 'year'
  | 'month'
  | 'day'
  | 'hour';

@ObjectType({ description: 'Failure' })
class Failure {
  @Field(() => Int, { nullable: true })
  time?: number;

  @Field(() => Int, { nullable: true })
  altitude?: number;

  @Field({ nullable: true })
  reason?: string;
}

@ObjectType({ description: 'Patch' })
class Patch {
  @Field({ nullable: true })
  small?: string;

  @Field({ nullable: true })
  large?: string;
}

@ObjectType({ description: 'Reddit' })
class Reddit {
  @Field({ nullable: true })
  campaign?: string;

  @Field({ nullable: true })
  launch?: string;

  @Field({ nullable: true })
  media?: string;

  @Field({ nullable: true })
  recovery?: string;
}

@ObjectType({ description: 'Flickr' })
class Flickr {
  @Field(() => [String], { nullable: true })
  small?: string[];

  @Field(() => [String], { nullable: true })
  original?: string[];
}

@ObjectType({ description: 'Link' })
class Link {
  @Field(() => Patch)
  patch: Patch;

  @Field(() => Reddit)
  reddit: Reddit;

  @Field(() => Flickr)
  flickr: Flickr;

  @Field({ nullable: true })
  presskit?: string;

  @Field({ nullable: true })
  webcast?: string;

  @Field({ nullable: true })
  youtubeId?: string;

  @Field({ nullable: true })
  article?: string;

  @Field({ nullable: true })
  wikipedia?: string;
}

@ObjectType({ description: 'Launch' })
export class Launch {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  flightNumber: number;

  @Field()
  name: string;

  @Field()
  dateUtc: string;

  @Field(() => Int)
  dateUnix: number;

  @Field()
  dateLocal: string;

  @Field()
  datePrecision: DatePrecision;

  @Field({ nullable: true })
  staticFireDateUtc?: string;

  @Field({ nullable: true })
  staticFireDateUnix?: number;

  @Field(() => Boolean)
  tbd: boolean;

  @Field(() => Boolean)
  net: boolean;

  @Field(() => Int, { nullable: true })
  window?: number;

  // TODO: rocket

  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => [Failure])
  failures: Failure[];

  @Field(() => Boolean)
  upcoming: boolean;

  @Field({ nullable: true })
  details?: string;

  // TODO: fairings

  // TODO: crew

  @Field(() => [Ship])
  ships: Ship[];

  @Field(() => [Capsule])
  capsules: Capsule[];

  // TODO: payloads

  // TODO: launchpad

  // TODO: cores

  @Field(() => Link)
  links: Link;

  @Field(() => Boolean)
  autoUpdate: boolean;

  @HideField()
  shipIds: string[];

  @HideField()
  capsuleIds: string[];

  // TODO: other fields
}
