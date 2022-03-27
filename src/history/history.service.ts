import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { DefaultService, History as _History } from 'src/generated';
import { History } from './models/history.model';
import { PaginatedHistory } from './models/paginated-history.model';

@Injectable()
export class HistoryService {
  private convertToHistory(history: _History): History {
    return {
      id: history.id,
      title: history.title,
      eventDateUtc: history.event_date_utc,
      eventDateUnix: history.event_date_unix,
      details: history.details,
      links: history.links,
    };
  }

  async getAllHistory(): Promise<History[]> {
    const history = await DefaultService.getAllHistory();
    return history.map((history) => this.convertToHistory(history));
  }

  async getHistory(id: string): Promise<History> {
    const history = await DefaultService.getOneHistory(id);
    return this.convertToHistory(history);
  }

  async getHistories(options: QueryOptionsInput): Promise<PaginatedHistory> {
    const history = await DefaultService.queryHistory({ options });
    return {
      ...history,
      docs: history.docs.map((history) => this.convertToHistory(history)),
    };
  }
}
