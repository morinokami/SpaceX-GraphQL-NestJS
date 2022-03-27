import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { History } from './history.model';

@ObjectType()
export class PaginatedHistory extends PaginatedResult(History) {}
