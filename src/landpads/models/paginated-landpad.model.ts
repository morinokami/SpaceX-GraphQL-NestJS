import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { Landpad } from './landpad.model';

@ObjectType()
export class PaginatedLandpads extends PaginatedResult(Landpad) {}
