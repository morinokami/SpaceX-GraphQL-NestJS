import { Injectable } from '@nestjs/common';
import { DefaultService } from 'generated';
import { Launch } from './models/launch.model';

@Injectable()
export class LaunchesService {
  async getAllLaunches(): Promise<Launch[]> {
    const launches = await DefaultService.getAllLaunches();
    return launches.map((launch) => {
      return {
        id: launch.id as string,
        flightNumber: launch.flight_number as number,
        name: launch.name as string,
        ships: [],
        capsules: [],
        shipIds: launch.ships ?? [],
        capsuleIds: launch.capsules ?? [],
      };
    });
  }

  async getLaunchesByIds(ids: string[]): Promise<Launch[]> {
    const launches = await Promise.all(
      ids.map((id) => {
        return DefaultService.getALaunch(id);
      }),
    );
    return launches.map((launch) => {
      return {
        id: launch.id as string,
        flightNumber: launch.flight_number as number,
        name: launch.name as string,
        ships: [],
        capsules: [],
        shipIds: launch.ships ?? [],
        capsuleIds: launch.capsules ?? [],
      };
    });
  }
}
