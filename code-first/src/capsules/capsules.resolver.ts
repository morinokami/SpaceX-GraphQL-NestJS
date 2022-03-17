import { Args, Query, Resolver } from '@nestjs/graphql';
import { CapsulesService } from './capsules.service';
import { Capsule } from './models/capsule.model';

@Resolver()
export class CapsulesResolver {
  constructor(private readonly capsulesService: CapsulesService) {}

  @Query(() => [Capsule])
  async allCapsules(): Promise<Capsule[]> {
    return this.capsulesService.getAllCapsules();
  }

  @Query(() => Capsule)
  async capsule(@Args('id') id: string): Promise<Capsule> {
    return this.capsulesService.getCapsule(id);
  }

  // TODO: Pagination
}
