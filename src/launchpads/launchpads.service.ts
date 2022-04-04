import { Injectable } from '@nestjs/common';
import { DefaultService, Launchpad as _Launchpad } from 'src/generated';
import { Launchpad, LaunchpadStatus } from './models/launchpad.model';

// TODO: Delete this file
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

  async getLaunchpadsByIds(ids: string[]): Promise<Launchpad[]> {
    const launchpads = await Promise.all(
      ids.map((id) => DefaultService.getOneLaunchpad(id)),
    );
    return launchpads.map((launchpad) => this.convertToLauchpad(launchpad));
  }
}
