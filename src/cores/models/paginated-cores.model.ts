import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';

import { Core } from './core.model';

@ObjectType()
export class PaginatedCores extends PaginatedResult(Core) {}
