import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { History as _History } from 'src/generated';
import { History } from 'src/history/models/history.model';
import { PaginatedHistory } from 'src/history/models/paginated-history.model';

class HistoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

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

  async getAllHistories(): Promise<History[]> {
    const history = await this.get<_History[]>('history');
    return history.map((history) => this.convertToHistory(history));
  }

  async getHistory(id: string): Promise<History> {
    const history = await this.get<_History>(`history/${id}`);
    return this.convertToHistory(history);
  }

  async getHistories(options: QueryOptionsInput): Promise<PaginatedHistory> {
    const history = await this.post<PaginatedHistory>('history/query', {
      options,
    });
    return {
      ...history,
      docs: history.docs.map((history) => this.convertToHistory(history)),
    };
  }
}

export default HistoryAPI;
