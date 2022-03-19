import { Injectable } from '@nestjs/common';
import { DefaultService } from 'generated';
import { Ship } from './models/ship.model';

@Injectable()
export class ShipsService {
  private convertToShip(
    ship: Awaited<ReturnType<typeof DefaultService.getAShip>>,
  ): Ship {
    return {
      id: ship.id as string,
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
