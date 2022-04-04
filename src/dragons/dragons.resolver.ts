import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { DataSources } from 'src/datasources';
import { Dragon } from './models/dragon.model';
import { PaginatedDragons } from './models/paginated-dragons.model';

@Resolver()
export class DragonsResolver {
  @Query(() => [Dragon], { description: 'Get all dragons' })
  async allDragons(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Dragon[]> {
    return dataSources.dragonsAPI.getAllDragons();
  }

  @Query(() => Dragon, { description: 'Get one dragon' })
  async dragon(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Dragon> {
    return dataSources.dragonsAPI.getDragon(id);
  }

  @Query(() => PaginatedDragons, { description: 'Query dragons' })
  async dragons(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedDragons> {
    return dataSources.dragonsAPI.getDragons(options);
  }
}
