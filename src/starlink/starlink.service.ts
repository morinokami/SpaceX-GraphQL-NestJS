import { Injectable } from '@nestjs/common';
import { DefaultService, Starlink as _Starlink } from 'src/generated';
import { Starlink } from './models/starlink.model';

@Injectable()
export class StarlinkService {
  private convertToStarlink(starlink: _Starlink): Starlink {
    return {
      id: starlink.id,
      version: starlink.version,
      launch: '',
      launchId: starlink.launch,
      longitude: starlink.longitude,
      latitude: starlink.latitude,
      heightKm: starlink.height_km,
      velocityKms: starlink.velocity_kms,
      spaceTrack: starlink.spaceTrack,
    };
  }

  async getAllStarlinks(): Promise<Starlink[]> {
    const starlinks = await DefaultService.getAllStarlinkSats();
    return starlinks.map((starlink) => this.convertToStarlink(starlink));
  }

  async getStarlink(id: string): Promise<Starlink> {
    const starlink = await DefaultService.getOneStarlinkSat(id);
    return this.convertToStarlink(starlink);
  }
}
