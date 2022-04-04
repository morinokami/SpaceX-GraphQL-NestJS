import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';

import { Payload } from './payload.model';

@ObjectType()
export class PaginatedPayload extends PaginatedResult(Payload) {}
