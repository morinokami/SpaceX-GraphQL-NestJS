import { forwardRef, Module } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { LaunchesResolver } from './launches.resolver';
import { ShipsModule } from 'src/ships/ships.module';
import { CapsulesModule } from 'src/capsules/capsules.module';

@Module({
  imports: [ShipsModule, forwardRef(() => CapsulesModule)],
  providers: [LaunchesService, LaunchesResolver],
  exports: [LaunchesService],
})
export class LaunchesModule {}
