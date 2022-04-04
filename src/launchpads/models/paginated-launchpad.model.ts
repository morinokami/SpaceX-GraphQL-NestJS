import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common';

import { Launchpad } from './launchpad.model';

@ObjectType()
export class PaginatedLaunchpads extends PaginatedResult(Launchpad) {}
