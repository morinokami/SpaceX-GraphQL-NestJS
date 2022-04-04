import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';

import { Rocket } from './rocket.model';

@ObjectType()
export class PaginatedRockets extends PaginatedResult(Rocket) {}
