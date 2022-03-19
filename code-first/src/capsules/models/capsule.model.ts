import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

export type CapsuleStatus = 'unknown' | 'active' | 'retired' | 'destroyed';

export type CapsuleType = 'Dragon 1.0' | 'Dragon 1.1' | 'Dragon 2.0';

@ObjectType({ description: 'Capsule' })
export class Capsule {
  @Field(() => ID)
  id: string;

  @Field()
  serial: string;

  @Field()
  status: CapsuleStatus;

  @Field()
  type: CapsuleType;

  @Field()
  reuseCount: number;

  @Field()
  waterLandings: number;

  @Field()
  landLandings: number;

  @Field({ nullable: true })
  lastUpdate?: string;

  @Field(() => [Launch])
  launches: Launch[];

  @HideField()
  launchIds: string[];
}
