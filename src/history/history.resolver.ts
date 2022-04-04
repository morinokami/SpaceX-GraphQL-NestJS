import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { DataSources } from 'src/datasources';

import { History } from './models/history.model';
import { PaginatedHistory } from './models/paginated-history.model';

@Resolver()
export class HistoryResolver {
  @Query(() => [History], { description: 'Get all histories' })
  async allHistories(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<History[]> {
    return dataSources.historyAPI.getAllHistories();
  }

  @Query(() => History, { description: 'Get one history' })
  async history(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<History> {
    return dataSources.historyAPI.getHistory(id);
  }

  @Query(() => PaginatedHistory, { description: 'Query histories' })
  async histories(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedHistory> {
    return dataSources.historyAPI.getHistories(options);
  }
}
