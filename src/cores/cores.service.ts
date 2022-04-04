import { Injectable } from '@nestjs/common';
import { Core as _Core, DefaultService } from 'src/generated';
import { Core, CoreStatus } from './models/core.model';

// TODO: Delete this file
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

  async getCoresByIds(ids: string[]): Promise<Core[]> {
    const cores = await Promise.all(
      ids.map((id) => DefaultService.getOneCore(id)),
    );
    return cores.map((core) => this.convertToCore(core));
  }
}
