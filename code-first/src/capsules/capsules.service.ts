import { Injectable } from '@nestjs/common';
import { DefaultService } from 'generated';
import { Capsule, CapsuleStatus, CapsuleType } from './models/capsule.model';

@Injectable()
export class CapsulesService {
  async getAllCapsules(): Promise<Capsule[]> {
    const capsules = await DefaultService.getAllCapsules();
    return Promise.all(
      capsules.map(async (capsule) => {
        const launches = await Promise.all(
          capsule.launches.map((launch) => {
            return DefaultService.getALaunch(launch);
          }),
        );
        return {
          id: capsule.id as string,
          serial: capsule.serial as string,
          status: capsule.status as CapsuleStatus,
          type: capsule.type as CapsuleType,
          reuseCount: capsule.reuse_count ?? 0,
          waterLandings: capsule.water_landings ?? 0,
          landLandings: capsule.land_landings ?? 0,
          lastUpdate: capsule.last_update,
          launches: launches.map((launch) => {
            return {
              id: launch.id as string,
              flightNumber: launch.flight_number as number,
              name: launch.name as string,
            };
          }),
        };
      }),
    );
  }

  async getCapsule(id: string): Promise<Capsule> {
    const capsule = await DefaultService.getACapsule(id);
    const launches = await Promise.all(
      capsule.launches.map((launch) => {
        return DefaultService.getALaunch(launch);
      }),
    );
    return {
      id: capsule.id as string,
      serial: capsule.serial as string,
      status: capsule.status as CapsuleStatus,
      type: capsule.type as CapsuleType,
      reuseCount: capsule.reuse_count ?? 0,
      waterLandings: capsule.water_landings ?? 0,
      landLandings: capsule.land_landings ?? 0,
      lastUpdate: capsule.last_update,
      launches: launches.map((launch) => {
        return {
          id: launch.id as string,
          flightNumber: launch.flight_number as number,
          name: launch.name as string,
        };
      }),
    };
  }
}
