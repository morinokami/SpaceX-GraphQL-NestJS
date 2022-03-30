import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { DefaultService, Launchpad as _Launchpad } from 'src/generated';
import { Launchpad, LaunchpadStatus } from './models/launchpad.model';
import { PaginatedLaunchpads } from './models/paginated-launchpad.model';

@Injectable()
export class LaunchpadsService {
  private convertToLauchpad(launchpad: _Launchpad): Launchpad {
    return {
      id: launchpad.id,
      name: launchpad.name,
      fullName: launchpad.full_name,
      status: launchpad.status as LaunchpadStatus,
      locality: launchpad.locality,
      region: launchpad.region,
      timezone: launchpad.timezone,
      latitude: launchpad.latitude,
      longitude: launchpad.longitude,
      launchAttempts: launchpad.launch_attempts,
      launchSuccesses: launchpad.launch_successes,
      rockets: [],
      rocketIds: launchpad.rockets,
      launches: [],
      launchIds: launchpad.launches,
    };
  }

  async getAllLaunchpads(): Promise<Launchpad[]> {
    const launchpads = await DefaultService.getAllLaunchpads();
    return launchpads.map((launchpad) => this.convertToLauchpad(launchpad));
  }

  async getLaunchpad(id: string): Promise<Launchpad> {
    const launchpad = await DefaultService.getOneLaunchpad(id);
    return this.convertToLauchpad(launchpad);
  }

  async getLaunchpads(
    options: QueryOptionsInput,
  ): Promise<PaginatedLaunchpads> {
    const launchpads = await DefaultService.queryLaunchpads({ options });
    return {
      ...launchpads,
      docs: launchpads.docs.map((launchpad) =>
        this.convertToLauchpad(launchpad),
      ),
    };
  }
}
