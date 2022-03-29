import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Thrust' })
export class Thrust {
  @Field({ nullable: true })
  kN: number;

  @Field(() => Int, { nullable: true })
  lbf: number;
}

@ObjectType({ description: 'Diameter' })
export class Diameter {
  @Field({ nullable: true })
  meters?: number;

  @Field({ nullable: true })
  feet?: number;
}
