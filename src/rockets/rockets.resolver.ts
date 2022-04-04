import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { DataSources } from 'src/datasources';
import { PaginatedRockets } from './models/paginated-rockets.model';
import { Rocket } from './models/rocket.model';

@Resolver()
export class RocketsResolver {
  @Query(() => [Rocket], { description: 'Get all rockets' })
  async allRockets(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Rocket[]> {
    return dataSources.rocketsAPI.getAllRockets();
  }

  @Query(() => Rocket, { description: 'Get one rocket' })
  async rocket(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Rocket> {
    return dataSources.rocketsAPI.getRocket(id);
  }

  @Query(() => PaginatedRockets, { description: 'Get rockets' })
  async rockets(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedRockets> {
    return dataSources.rocketsAPI.getRockets(options);
  }
}
