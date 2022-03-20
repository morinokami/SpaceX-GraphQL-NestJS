import { Injectable } from '@nestjs/common';
import { DefaultService, Launch as _Launch } from 'generated';
import { Launch } from './models/launch.model';

@Injectable()
export class LaunchesService {
  private convertToLaunch(launch: _Launch): Launch {
    return {
      id: launch.id,
      flightNumber: launch.flight_number,
      name: launch.name,
      ships: [],
      capsules: [],
      shipIds: launch.ships,
      capsuleIds: launch.capsules,
    };
  }

  async getAllLaunches(): Promise<Launch[]> {
    const launches = await DefaultService.getAllLaunches();
    return launches.map((launch) => this.convertToLaunch(launch));
  }

  async getLaunchesByIds(ids: string[]): Promise<Launch[]> {
    const launches = await Promise.all(
      ids.map((id) => {
        return DefaultService.getOneLaunch(id);
      }),
    );
    return launches.map((launch) => this.convertToLaunch(launch));
  }
}
