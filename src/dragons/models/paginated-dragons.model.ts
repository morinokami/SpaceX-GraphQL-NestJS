import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';
import { Dragon } from './dragon.model';

@ObjectType()
export class PaginatedDragons extends PaginatedResult(Dragon) {}
