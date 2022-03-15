import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Foo' })
export class Foo {
  @Field()
  bar: string;
}
