import { forwardRef, Module } from '@nestjs/common';
import { LaunchesModule } from 'src/launches/launches.module';
import { ShipsDataLoader } from './ships.dataloader';
import { ShipsResolver } from './ships.resolver';
import { ShipsService } from './ships.service';

@Module({
  imports: [forwardRef(() => LaunchesModule)],
  providers: [ShipsResolver, ShipsService, ShipsDataLoader],
  exports: [ShipsDataLoader],
})
export class ShipsModule {}
