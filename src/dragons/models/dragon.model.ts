import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Heat Shield' })
class HeatShield {
  @Field()
  material: string;

  @Field()
  sizeMeters: number;

  @Field(() => Int, { nullable: true })
  tempDegrees?: number;

  @Field({ nullable: true })
  devPartner?: string;
}

@ObjectType({ description: 'Thrust' })
class Thrust {
  @Field(() => Int, { nullable: true })
  kN: number;

  @Field(() => Int, { nullable: true })
  lbf: number;
}

@ObjectType({ description: 'Thruster' })
class Thruster {
  @Field({ nullable: true })
  type?: string;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field(() => Int, { nullable: true })
  pods?: number;

  @Field({ nullable: true })
  fuel1?: string;

  @Field({ nullable: true })
  fuel2?: string;

  @Field(() => Int, { nullable: true })
  isp?: number;

  @Field(() => Thrust, { nullable: true })
  thrust?: Thrust;
}

@ObjectType({ description: 'Payload Mass' })
class PayloadMass {
  @Field(() => Int, { nullable: true })
  kg: number;

  @Field(() => Int, { nullable: true })
  lb: number;
}

@ObjectType({ description: 'Payload Volume' })
class PayloadVolume {
  @Field(() => Int, { nullable: true })
  cubicMeters: number;

  @Field(() => Int, { nullable: true })
  cubicFeet: number;
}

@ObjectType({ description: 'Pressurized Capsule' })
class PressurizedCapsule {
  @Field(() => PayloadVolume)
  payloadVolume: PayloadVolume;
}

@ObjectType({ description: 'Cargo' })
class Cargo {
  @Field(() => Int, { nullable: true })
  solarArray?: number;

  @Field({ nullable: true })
  unpressurizedCargo?: boolean;
}

@ObjectType({ description: 'Trunk' })
class Trunk {
  @Field(() => PayloadVolume)
  trunkVolume: PayloadVolume;

  @Field(() => Cargo)
  cargo: Cargo;
}

@ObjectType({ description: 'HeightWTrunk' })
class HeightWTrunk {
  @Field({ nullable: true })
  meters?: number;

  @Field({ nullable: true })
  feet?: number;
}

@ObjectType({ description: 'Diameter' })
class Diameter {
  @Field({ nullable: true })
  meters?: number;

  @Field({ nullable: true })
  feet?: number;
}

@ObjectType({ description: 'Dragon' })
export class Dragon {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  active: boolean;

  @Field(() => Int)
  crewCapacity: number;

  @Field(() => Int)
  sidewallAngleDeg: number;

  @Field(() => Int)
  orbitDurationYr: number;

  @Field(() => Int)
  dryMassKg: number;

  @Field(() => Int)
  dryMassLb: number;

  @Field({ nullable: true })
  firstFlight?: string;

  @Field(() => HeatShield)
  heatShield: HeatShield;

  @Field(() => [Thruster])
  thrusters: Thruster[];

  @Field(() => PayloadMass)
  launchPayloadMass: PayloadMass;

  @Field(() => PayloadVolume)
  launchPayloadVolume: PayloadVolume;

  @Field(() => PayloadMass)
  returnPayloadMass: PayloadMass;

  @Field(() => PayloadVolume)
  returnPayloadVolume: PayloadVolume;

  @Field(() => PressurizedCapsule)
  pressurizedCapsule: PressurizedCapsule;

  @Field(() => Trunk)
  trunk: Trunk;

  @Field(() => HeightWTrunk)
  heightWTrunk: HeightWTrunk;

  @Field(() => Diameter)
  diameter: Diameter;

  @Field(() => [String])
  flickrImages: string[];

  @Field({ nullable: true })
  wikipedia?: string;

  @Field({ nullable: true })
  description?: string;
}
