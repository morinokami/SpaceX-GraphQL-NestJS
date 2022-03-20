import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

export type CoreStatus =
  | 'active'
  | 'inactive'
  | 'unknown'
  | 'expended'
  | 'lost'
  | 'retired';

@ObjectType({ description: 'Capsule' })
export class Core {
  @Field(() => ID)
  id: string;

  @Field()
  serial: string;

  @Field({ nullable: true })
  block?: string;

  @Field()
  status: CoreStatus;

  @Field()
  reuseCount: number;

  @Field()
  rtlsAttempts: number;

  @Field()
  rtlsLandings: number;

  @Field()
  asdsAttempts: number;

  @Field()
  asdsLandings: number;

  @Field({ nullable: true })
  lastUpdate?: string;

  @Field(() => [Launch])
  launches: Launch[];

  @HideField()
  launchIds: string[];
}
