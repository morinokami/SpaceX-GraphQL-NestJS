import { Injectable } from '@nestjs/common';
import { DefaultService, Launch as _Launch } from 'src/generated';
import { DatePrecision, Launch } from './models/launch.model';

@Injectable()
export class LaunchesService {
  private convertToLaunch(launch: _Launch): Launch {
    return {
      id: launch.id,
      flightNumber: launch.flight_number,
      name: launch.name,
      dateUtc: launch.date_utc,
      dateUnix: launch.date_unix,
      dateLocal: launch.date_local,
      datePrecision: launch.date_precision as DatePrecision,
      staticFireDateUtc: launch.static_fire_date_utc,
      staticFireDateUnix: launch.static_fire_date_unix,
      tbd: launch.tbd,
      net: launch.net,
      window: launch.window,
      rocket: null,
      success: launch.success,
      failures: launch.failures,
      upcoming: launch.upcoming,
      details: launch.details,
      fairings: launch.fairings
        ? {
            reused: launch.fairings.reused,
            recoveryAttempt: launch.fairings.recovery_attempt,
            recovered: launch.fairings.recovered,
            ships: [],
          }
        : null,
      crew: [],
      ships: [],
      capsules: [],
      payloads: [],
      launchpad: null,
      cores: launch.cores.map((core) => ({
        core: null,
        flight: core.flight,
        gridfins: core.gridfins,
        legs: core.legs,
        reused: core.reused,
        landingAttempt: core.landing_attempt,
        landingSuccess: core.landing_success,
        landingType: core.landing_type,
        landpad: null,
        coreId: core.core,
        landpadId: core.landpad,
      })),
      links: {
        patch: launch.links.patch,
        reddit: launch.links.reddit,
        flickr: launch.links.flickr,
        presskit: launch.links.presskit,
        webcast: launch.links.webcast,
        youtubeId: launch.links.youtube_id,
        article: launch.links.article,
        wikipedia: launch.links.wikipedia,
      },
      autoUpdate: launch.auto_update,
      rocketId: launch.rocket,
      shipIdsForFairings: launch.fairings ? launch.fairings.ships : [],
      crewIds: launch.crew,
      shipIds: launch.ships,
      capsuleIds: launch.capsules,
      payloadIds: launch.payloads,
      launchpadId: launch.launchpad,
    };
  }

  async getAllLaunches(): Promise<Launch[]> {
    const launches = await DefaultService.getAllLaunches();
    return launches.map((launch) => this.convertToLaunch(launch));
  }

  async getLaunchesByIds(ids: string[]): Promise<Launch[]> {
    const launches = await Promise.all(
      ids.map(async (id) => {
        try {
          return await DefaultService.getOneLaunch(id);
        } catch {
          return null;
        }
      }),
    );
    return launches.map((launch) =>
      launch ? this.convertToLaunch(launch) : null,
    );
  }
}
