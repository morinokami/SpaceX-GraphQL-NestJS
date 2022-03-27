import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { Ship } from './ship.model';

@ObjectType()
export class PaginatedShips extends PaginatedResult(Ship) {}
