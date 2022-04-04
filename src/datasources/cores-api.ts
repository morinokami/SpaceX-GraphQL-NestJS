import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Core, CoreStatus } from 'src/cores/models/core.model';
import { PaginatedCores } from 'src/cores/models/paginated-cores.model';
import { Core as _Core } from 'src/generated';

class CoresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  private convertToCore(core: _Core): Core {
    return {
      id: core.id,
      serial: core.serial,
      block: core.block,
      status: core.status as CoreStatus,
      reuseCount: core.reuse_count,
      rtlsAttempts: core.rtls_attempts,
      rtlsLandings: core.rtls_landings,
      asdsAttempts: core.asds_attempts,
      asdsLandings: core.asds_landings,
      lastUpdate: core.last_update,
      launches: [],
      launchIds: core.launches,
    };
  }

  async getAllCores(): Promise<Core[]> {
    const cores = await this.get<_Core[]>('cores');
    return cores.map((core) => this.convertToCore(core));
  }

  async getCore(id: string): Promise<Core> {
    const core = await this.get<_Core>(`cores/${id}`);
    return this.convertToCore(core);
  }

  async getCores(options: QueryOptionsInput): Promise<PaginatedCores> {
    const cores = await this.post<PaginatedCores>('cores/query', { options });
    return {
      ...cores,
      docs: cores.docs.map((core) => this.convertToCore(core)),
    };
  }
}

export default CoresAPI;
