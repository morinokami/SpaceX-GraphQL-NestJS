import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Launchpad as _Launchpad } from 'src/generated';
import {
  Launchpad,
  LaunchpadStatus,
} from 'src/launchpads/models/launchpad.model';
import { PaginatedLaunchpads } from 'src/launchpads/models/paginated-launchpad.model';

class LaunchpadsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

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
    const launchpads = await this.get<_Launchpad[]>('launchpads');
    return launchpads.map((launchpad) => this.convertToLauchpad(launchpad));
  }

  async getLaunchpad(id: string): Promise<Launchpad> {
    const launchpad = await this.get<_Launchpad>(`launchpads/${id}`);
    return this.convertToLauchpad(launchpad);
  }

  async getLaunchpads(
    options: QueryOptionsInput,
  ): Promise<PaginatedLaunchpads> {
    const launchpads = await this.post<PaginatedLaunchpads>(
      'launchpads/query',
      {
        options,
      },
    );
    return {
      ...launchpads,
      docs: launchpads.docs.map((launchpad) =>
        this.convertToLauchpad(launchpad),
      ),
    };
  }
}

export default LaunchpadsAPI;
