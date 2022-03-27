import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'History Links' })
class HistoryLinks {
  @Field({ nullable: true })
  article?: string;
}

@ObjectType({ description: 'History' })
export class History {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  eventDateUtc?: string;

  @Field(() => Int, { nullable: true })
  eventDateUnix?: number;

  @Field({ nullable: true })
  details?: string;

  @Field(() => HistoryLinks)
  links: HistoryLinks;
}
