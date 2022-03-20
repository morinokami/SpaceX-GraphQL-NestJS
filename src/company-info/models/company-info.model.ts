import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Headquarters {
  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;
}

@ObjectType()
class Links {
  @Field({ nullable: true })
  website?: string;

  @Field({ nullable: true })
  flickr?: string;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  elonTwitter?: string;
}

@ObjectType({ description: 'Company Info' })
export class CompanyInfo {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  founder?: string;

  @Field(() => Int, { nullable: true })
  founded?: number;

  @Field(() => Int, { nullable: true })
  employees?: number;

  @Field(() => Int, { nullable: true })
  vehicles?: number;

  @Field(() => Int, { nullable: true })
  launchSites?: number;

  @Field(() => Int, { nullable: true })
  testSites?: number;

  @Field({ nullable: true })
  ceo?: string;

  @Field({ nullable: true })
  cto?: string;

  @Field({ nullable: true })
  coo?: string;

  @Field({ nullable: true })
  ctoPropulsion?: string;

  @Field({ nullable: true })
  valuation?: number;

  @Field(() => Headquarters, { nullable: true })
  headquarters?: Headquarters;

  @Field(() => Links, { nullable: true })
  links?: Links;

  @Field({ nullable: true })
  summary?: string;
}