import { RESTDataSource } from 'apollo-datasource-rest';
import { Capsule as _Capsule } from 'src/generated';
import {
  Capsule,
  CapsuleStatus,
  CapsuleType,
} from 'src/capsules/models/capsule.model';
import { PaginatedCapsules } from 'src/capsules/models/paginated-capsules.model';
import { QueryOptionsInput } from 'src/common';

class CapsulesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

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
    const capsules = await this.get<_Capsule[]>('capsules');
    return capsules.map((capsule) => this.convertToCapsule(capsule));
  }

  async getCapsule(id: string): Promise<Capsule> {
    const capsule = await this.get<_Capsule>(`capsules/${id}`);
    return this.convertToCapsule(capsule);
  }

  async getCapsules(options: QueryOptionsInput): Promise<PaginatedCapsules> {
    const capsules = await this.post<PaginatedCapsules>('capsules/query', {
      options,
    });
    return {
      ...capsules,
      docs: capsules.docs.map((capsule) => this.convertToCapsule(capsule)),
    };
  }
}

export default CapsulesAPI;
