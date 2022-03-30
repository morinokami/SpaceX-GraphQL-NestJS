import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { PaginatedPayload } from './models/paginated-payload.model';
import { Payload } from './models/payload.model';
import { PayloadsService } from './payloads.service';

@Resolver(() => Payload)
export class PayloadsResolver {
  constructor(
    private readonly payloadsService: PayloadsService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Payload], { description: 'Get all payloads' })
  async allPayloads(): Promise<Payload[]> {
    return this.payloadsService.getAllPayloads();
  }

  @Query(() => Payload, { description: 'Get one payload' })
  async payload(@Args('id') id: string): Promise<Payload> {
    return this.payloadsService.getPayload(id);
  }

  @Query(() => PaginatedPayload, { description: 'Query payloads' })
  async payloads(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedPayload> {
    return this.payloadsService.getPayloads(options);
  }

  @ResolveField(() => Launch)
  async launch(@Parent() payload: Payload): Promise<Launch> {
    if (!payload.launchId) {
      return null;
    }
    return this.launchesDataLoader.load(payload.launchId);
  }

  // TODO: Resolve Capsule
}
