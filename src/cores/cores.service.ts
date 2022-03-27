import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { Core as _Core, DefaultService } from 'src/generated';
import { Core, CoreStatus } from './models/core.model';
import { PaginatedCores } from './models/paginated-cores.model';

@Injectable()
export class CoresService {
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
    const cores = await DefaultService.getAllCores();
    return cores.map((core) => this.convertToCore(core));
  }

  async getCore(id: string): Promise<Core> {
    const core = await DefaultService.getOneCore(id);
    return this.convertToCore(core);
  }

  async getCores(options: QueryOptionsInput): Promise<PaginatedCores> {
    const cores = await DefaultService.queryCores({ options });
    return {
      ...cores,
      docs: cores.docs.map((core) => this.convertToCore(core)),
    };
  }
}
