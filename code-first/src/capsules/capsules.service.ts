import { Injectable } from '@nestjs/common';
import { DefaultService } from 'generated';
import { Capsule, CapsuleStatus, CapsuleType } from './models/capsule.model';

@Injectable()
export class CapsulesService {
  async getAllCapsules(): Promise<Capsule[]> {
    const capsules = await DefaultService.getAllCapsules();
    return capsules.map((capsule) => {
      return {
        id: capsule.id as string,
        serial: capsule.serial as string,
        status: capsule.status as CapsuleStatus,
        type: capsule.type as CapsuleType,
        reuseCount: capsule.reuse_count ?? 0,
        waterLandings: capsule.water_landings ?? 0,
        landLandings: capsule.land_landings ?? 0,
        lastUpdate: capsule.last_update,
        launches: [],
        launchIds: capsule.launches ?? [],
      };
    });
  }

  async getCapsule(id: string): Promise<Capsule> {
    const capsule = await DefaultService.getACapsule(id);
    return {
      id: capsule.id as string,
      serial: capsule.serial as string,
      status: capsule.status as CapsuleStatus,
      type: capsule.type as CapsuleType,
      reuseCount: capsule.reuse_count ?? 0,
      waterLandings: capsule.water_landings ?? 0,
      landLandings: capsule.land_landings ?? 0,
      lastUpdate: capsule.last_update,
      launches: [],
      launchIds: capsule.launches ?? [],
    };
  }

  async getCapsulesByIds(ids: string[]): Promise<Capsule[]> {
    const capsules = await Promise.all(
      ids.map((id) => {
        return DefaultService.getACapsule(id);
      }),
    );
    return capsules.map((capsule) => {
      return {
        id: capsule.id as string,
        serial: capsule.serial as string,
        status: capsule.status as CapsuleStatus,
        type: capsule.type as CapsuleType,
        reuseCount: capsule.reuse_count ?? 0,
        waterLandings: capsule.water_landings ?? 0,
        landLandings: capsule.land_landings ?? 0,
        lastUpdate: capsule.last_update,
        launches: [],
        launchIds: capsule.launches ?? [],
      };
    });
  }
}
