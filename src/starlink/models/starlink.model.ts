import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { Launch } from 'src/launches/models/launch.model';

@ObjectType({ description: 'Space Track' })
class SpaceTrack {
  @Field({ nullable: true })
  CCSDS_OMM_VERS?: string;

  @Field({ nullable: true })
  COMMENT?: string;

  @Field({ nullable: true })
  CREATION_DATE?: string;

  @Field({ nullable: true })
  ORIGINATOR?: string;

  @Field({ nullable: true })
  OBJECT_NAME?: string;

  @Field({ nullable: true })
  OBJECT_ID?: string;

  @Field({ nullable: true })
  CENTER_NAME?: string;

  @Field({ nullable: true })
  REF_FRAME?: string;

  @Field({ nullable: true })
  TIME_SYSTEM?: string;

  @Field({ nullable: true })
  MEAN_ELEMENT_THEORY?: string;

  @Field({ nullable: true })
  EPOCH?: string;

  @Field({ nullable: true })
  MEAN_MOTION?: number;

  @Field({ nullable: true })
  ECCENTRICITY?: number;

  @Field({ nullable: true })
  INCLINATION?: number;

  @Field({ nullable: true })
  RA_OF_ASC_NODE?: number;

  @Field({ nullable: true })
  ARG_OF_PERICENTER?: number;

  @Field({ nullable: true })
  MEAN_ANOMALY?: number;

  @Field(() => Int, { nullable: true })
  EPHEMERIS_TYPE?: number;

  @Field({ nullable: true })
  CLASSIFICATION_TYPE?: string;

  @Field(() => Int, { nullable: true })
  NORAD_CAT_ID?: number;

  @Field(() => Int, { nullable: true })
  ELEMENT_SET_NO?: number;

  @Field(() => Int, { nullable: true })
  REV_AT_EPOCH?: number;

  @Field({ nullable: true })
  BSTAR?: number;

  @Field({ nullable: true })
  MEAN_MOTION_DOT?: number;

  @Field({ nullable: true })
  MEAN_MOTION_DDOT?: number;

  @Field({ nullable: true })
  SEMIMAJOR_AXIS?: number;

  @Field({ nullable: true })
  PERIOD?: number;

  @Field({ nullable: true })
  APOAPSIS?: number;

  @Field({ nullable: true })
  PERIAPSIS?: number;

  @Field({ nullable: true })
  OBJECT_TYPE?: string;

  @Field({ nullable: true })
  RCS_SIZE?: string;

  @Field({ nullable: true })
  COUNTRY_CODE?: string;

  @Field({ nullable: true })
  LAUNCH_DATE?: string;

  @Field({ nullable: true })
  SITE?: string;

  @Field({ nullable: true })
  DECAY_DATE?: string;

  @Field(() => Int, { nullable: true })
  DECAYED?: number;

  @Field(() => Int, { nullable: true })
  FILE?: number;

  @Field(() => Int, { nullable: true })
  GP_ID?: number;

  @Field({ nullable: true })
  TLE_LINE0?: string;

  @Field({ nullable: true })
  TLE_LINE1?: string;

  @Field({ nullable: true })
  TLE_LINE2?: string;
}

@ObjectType({ description: 'Starlink' })
export class Starlink {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  version?: string;

  @Field(() => Launch, { nullable: true })
  launch?: string;

  @Field({ nullable: true })
  longitude?: number;

  @Field({ nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  heightKm?: number;

  @Field({ nullable: true })
  velocityKms?: number;

  @Field(() => SpaceTrack)
  spaceTrack: SpaceTrack;

  @HideField()
  launchId: string;
}
