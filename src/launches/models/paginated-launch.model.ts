import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { Launch } from './launch.model';

@ObjectType()
export class PaginatedLaunch extends PaginatedResult(Launch) {}
