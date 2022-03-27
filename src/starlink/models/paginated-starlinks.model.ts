import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { Starlink } from './starlink.model';

@ObjectType()
export class PaginatedStarlinks extends PaginatedResult(Starlink) {}
