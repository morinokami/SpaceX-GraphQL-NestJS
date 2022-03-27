import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { HistoryService } from './history.service';
import { History } from './models/history.model';
import { PaginatedHistory } from './models/paginated-history.model';

@Resolver()
export class HistoryResolver {
  constructor(private readonly historyService: HistoryService) {}

  @Query(() => [History], { description: 'Get all histories' })
  async allHistories(): Promise<History[]> {
    return this.historyService.getAllHistory();
  }

  @Query(() => History, { description: 'Get one history' })
  async history(@Args('id') id: string): Promise<History> {
    return this.historyService.getHistory(id);
  }

  @Query(() => PaginatedHistory, { description: 'Query histories' })
  async histories(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedHistory> {
    return this.historyService.getHistories(options);
  }
}
