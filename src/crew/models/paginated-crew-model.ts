import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';

import { Crew } from './crew.model';

@ObjectType()
export class PaginatedCrew extends PaginatedResult(Crew) {}
