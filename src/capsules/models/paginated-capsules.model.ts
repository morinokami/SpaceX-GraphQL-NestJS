import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { Capsule } from './capsule.model';

@ObjectType()
export class PaginatedCapsules extends PaginatedResult(Capsule) {}
