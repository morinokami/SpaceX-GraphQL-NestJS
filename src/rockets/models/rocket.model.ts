import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Diameter, Thrust } from 'src/common';

@ObjectType({ description: 'Height' })
class Height {
  @Field({ nullable: true })
  meters?: number;

  @Field({ nullable: true })
  feet?: number;
}

@ObjectType({ description: 'Mass' })
class Mass {
  @Field(() => Int, { nullable: true })
  kg?: number;

  @Field(() => Int, { nullable: true })
  lb?: number;
}

@ObjectType({ description: 'Payload Weights' })
class PayloadWeight {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  kg?: number;

  @Field(() => Int, { nullable: true })
  lb?: number;
}

@ObjectType({ description: 'Thrust Sea Level' })
class ThrustSeaLevel {
  @Field(() => Int, { nullable: true })
  kN?: number;

  @Field(() => Int, { nullable: true })
  lbf?: number;
}

@ObjectType({ description: 'Thrust Vacuum' })
class ThrustVacuum {
  @Field(() => Int, { nullable: true })
  kN?: number;

  @Field(() => Int, { nullable: true })
  lbf?: number;
}

@ObjectType({ description: 'First Stage' })
class FirstStage {
  @Field({ nullable: true })
  reusable?: boolean;

  @Field(() => Int, { nullable: true })
  engines?: number;

  @Field({ nullable: true })
  fuelAmountTons?: number;

  @Field(() => Int, { nullable: true })
  burnTimeSec?: number;

  @Field(() => ThrustSeaLevel)
  thrustSeaLevel: ThrustSeaLevel;

  @Field(() => ThrustVacuum)
  thrustVacuum: ThrustVacuum;
}

@ObjectType({ description: 'Composite Fairing' })
class CompositeFairing {
  @Field(() => Height)
  height: Height;

  @Field(() => Diameter)
  diameter: Diameter;
}

@ObjectType({ description: 'Payloads' })
class Payloads {
  @Field({ nullable: true })
  option1?: string;

  @Field(() => CompositeFairing)
  compositeFairing: CompositeFairing;
}

@ObjectType({ description: 'Second Stage' })
class SecondStage {
  @Field({ nullable: true })
  reusable?: boolean;

  @Field(() => Int, { nullable: true })
  engines?: number;

  @Field({ nullable: true })
  fuelAmountTons?: number;

  @Field(() => Int, { nullable: true })
  burnTimeSec?: number;

  @Field(() => Thrust)
  thrust: Thrust;

  @Field(() => Payloads)
  payloads: Payloads;
}

@ObjectType({ description: 'Isp' })
class Isp {
  @Field(() => Int, { nullable: true })
  seaLevel?: number;

  @Field(() => Int, { nullable: true })
  vacuum?: number;
}

@ObjectType({ description: 'Engines' })
class Engines {
  @Field(() => Int, { nullable: true })
  number?: number;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  version?: string;

  @Field({ nullable: true })
  layout?: string;

  @Field(() => Isp)
  isp: Isp;

  @Field({ nullable: true })
  engineLossMax?: number;

  @Field({ nullable: true })
  propellant1?: string;

  @Field({ nullable: true })
  propellant2?: string;

  @Field(() => ThrustSeaLevel)
  thrustSeaLevel: ThrustSeaLevel;

  @Field(() => ThrustVacuum)
  thrustVacuum: ThrustVacuum;

  @Field({ nullable: true })
  thrustToWeight?: number;
}

@ObjectType({ description: 'Landing Legs' })
class LandingLegs {
  @Field(() => Int, { nullable: true })
  number?: number;

  @Field({ nullable: true })
  material?: string;
}

@ObjectType({ description: 'Rocket' })
export class Rocket {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  active?: boolean;

  @Field(() => Int, { nullable: true })
  stages?: number;

  @Field(() => Int, { nullable: true })
  boosters?: number;

  @Field(() => Int, { nullable: true })
  costPerLaunch?: number;

  @Field(() => Int, { nullable: true })
  successRatePct?: number;

  @Field({ nullable: true })
  firstFlight?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  company?: string;

  @Field(() => Height)
  height: Height;

  @Field(() => Diameter)
  diameter: Diameter;

  @Field(() => Mass)
  mass: Mass;

  @Field(() => [PayloadWeight])
  payloadWeights: PayloadWeight[];

  @Field(() => FirstStage)
  firstStage: FirstStage;

  @Field(() => SecondStage)
  secondStage: SecondStage;

  @Field(() => Engines)
  engines: Engines;

  @Field(() => LandingLegs)
  landingLegs: LandingLegs;

  @Field(() => [String])
  flickrImages: string[];

  @Field()
  wikipedia?: string;

  @Field()
  description?: string;
}
