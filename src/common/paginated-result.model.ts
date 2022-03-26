import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

// TODO: Fix any
export function PaginatedResult<T>(cls: Type<T>): any {
  @ObjectType({ isAbstract: true, description: 'PaginatedResult' })
  abstract class _PaginatedResult<T> {
    @Field(() => [cls])
    docs: T[];

    @Field(() => Int)
    totalDocs: number;

    @Field(() => Int)
    offset: number;

    @Field(() => Int)
    limit: number;

    @Field(() => Int)
    totalPages: number;

    @Field(() => Int)
    page: number;

    @Field(() => Int)
    pagingCounter: number;

    @Field()
    hasPrevPage: boolean;

    @Field()
    hasNextPage: boolean;

    @Field(() => Int, { nullable: true })
    prevPage?: number;

    @Field(() => Int, { nullable: true })
    nextPage?: number;
  }
  return _PaginatedResult;
}
