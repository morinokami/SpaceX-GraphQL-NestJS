import { Injectable } from '@nestjs/common';
import { DefaultService } from 'generated';
import { Ship } from './models/ship.model';

@Injectable()
export class ShipsService {
  private convertToShip(
    ship: Awaited<ReturnType<typeof DefaultService.getAShip>>,
  ): Ship {
    return {
      id: ship.id,
      name: ship.name,
      legacyId: ship.legacy_id,
      model: ship.model,
      type: ship.type,
      roles: ship.roles,
      active: ship.active,
      imo: ship.imo,
      mmsi: ship.mmsi,
      abs: ship.abs,
      class: ship.class,
      massLbs: ship.mass_lbs,
      yearBuilt: ship.year_built,
      homePort: ship.home_port,
      status: ship.status,
      speedKn: ship.speed_kn,
      courseDeg: ship.course_deg,
      latitude: ship.latitude,
      longitude: ship.longitude,
      lastAisUpdate: ship.last_ais_update,
      link: ship.link,
      image: ship.image,
      launches: [],
      launchIds: ship.launches,
    };
  }

  async getAllShips(): Promise<Ship[]> {
    const ships = await DefaultService.getAllShips();
    return ships.map((ship) => this.convertToShip(ship));
  }

  async getShipsByIds(ids: string[]): Promise<Ship[]> {
    const ships = await Promise.all(
      ids.map((id) => {
        return DefaultService.getAShip(id);
      }),
    );
    return ships.map((ship) => this.convertToShip(ship));
  }
}
