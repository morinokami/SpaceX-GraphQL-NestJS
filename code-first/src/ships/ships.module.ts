import { Module } from '@nestjs/common';
import { ShipsDataLoader } from './ships.dataloader';
import { ShipsResolver } from './ships.resolver';
import { ShipsService } from './ships.service';

@Module({
  providers: [ShipsResolver, ShipsService, ShipsDataLoader],
  exports: [ShipsDataLoader],
})
export class ShipsModule {}
