import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { PaginatedRockets } from './models/paginated-rockets.model';
import { Rocket } from './models/rocket.model';
import { RocketsService } from './rockets.service';

@Resolver()
export class RocketsResolver {
  constructor(private readonly rocketsService: RocketsService) {}

  @Query(() => [Rocket], { description: 'Get all rockets' })
  async allRockets(): Promise<Rocket[]> {
    return this.rocketsService.getAllRockets();
  }

  @Query(() => Rocket, { description: 'Get one rocket' })
  async rocket(@Args('id') id: string): Promise<Rocket> {
    return this.rocketsService.getRocket(id);
  }

  @Query(() => PaginatedRockets, { description: 'Get rockets' })
  async rockets(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedRockets> {
    return this.rocketsService.getRockets(options);
  }
}
