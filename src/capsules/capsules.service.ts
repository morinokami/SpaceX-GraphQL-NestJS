import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common/query-options.input';
import { Capsule as _Capsule, DefaultService } from 'src/generated';
import { Capsule, CapsuleStatus, CapsuleType } from './models/capsule.model';
import { PaginatedCapsules } from './models/paginated-capsules.model';

@Injectable()
export class CapsulesService {
  private convertToCapsule(capsule: _Capsule): Capsule {
    return {
      id: capsule.id,
      serial: capsule.serial,
      status: capsule.status as CapsuleStatus,
      type: capsule.type as CapsuleType,
      reuseCount: capsule.reuse_count,
      waterLandings: capsule.water_landings,
      landLandings: capsule.land_landings,
      lastUpdate: capsule.last_update,
      launches: [],
      launchIds: capsule.launches,
    };
  }

  async getAllCapsules(): Promise<Capsule[]> {
    const capsules = await DefaultService.getAllCapsules();
    return capsules.map((capsule) => this.convertToCapsule(capsule));
  }

  async getCapsule(id: string): Promise<Capsule> {
    const capsule = await DefaultService.getOneCapsule(id);
    return this.convertToCapsule(capsule);
  }

  async getCapsules(options: QueryOptionsInput): Promise<PaginatedCapsules> {
    const capsules = await DefaultService.queryCapsules({ options });
    return {
      ...capsules,
      docs: capsules.docs.map((capsule) => this.convertToCapsule(capsule)),
    };
  }

  async getCapsulesByIds(ids: string[]): Promise<Capsule[]> {
    const capsules = await Promise.all(
      ids.map((id) => {
        return DefaultService.getOneCapsule(id);
      }),
    );
    return capsules.map((capsule) => {
      return this.convertToCapsule(capsule);
    });
  }
}
