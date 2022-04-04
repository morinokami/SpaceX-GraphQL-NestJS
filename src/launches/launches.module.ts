import { Module } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { LaunchesResolver } from './launches.resolver';
import { ShipsModule } from 'src/ships/ships.module';
import { LaunchesDataLoader } from './launches.dataloader';
import { RocketsModule } from 'src/rockets/rockets.module';
import { PayloadsModule } from 'src/payloads/payloads.module';
import { LaunchpadsModule } from 'src/launchpads/launchpads.module';

@Module({
  imports: [ShipsModule, RocketsModule, PayloadsModule, LaunchpadsModule],
  providers: [LaunchesService, LaunchesResolver, LaunchesDataLoader],
  exports: [LaunchesDataLoader],
})
export class LaunchesModule {}
