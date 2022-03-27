import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

export type CrewStatus = 'active' | 'inactive' | 'retired' | 'unknown';

@ObjectType({ description: 'Crew' })
export class Crew {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  status: CrewStatus;

  @Field({ nullable: true })
  agency?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  wikipedia?: string;

  @Field(() => [Launch])
  launches: Launch[];

  @HideField()
  launchIds: string[];
}
