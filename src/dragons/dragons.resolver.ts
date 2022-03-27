import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { DragonsService } from './dragons.service';
import { Dragon } from './models/dragon.model';
import { PaginatedDragons } from './models/paginated-dragons.model';

@Resolver()
export class DragonsResolver {
  constructor(private readonly dragonsService: DragonsService) {}

  @Query(() => [Dragon], { description: 'Get all dragons' })
  async allDragons(): Promise<Dragon[]> {
    return this.dragonsService.getAllDragons();
  }

  @Query(() => Dragon, { description: 'Get one dragon' })
  async dragon(@Args('id') id: string): Promise<Dragon> {
    return this.dragonsService.getDragon(id);
  }

  @Query(() => PaginatedDragons, { description: 'Query dragons' })
  async dragons(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedDragons> {
    return this.dragonsService.getDragons(options);
  }
}
