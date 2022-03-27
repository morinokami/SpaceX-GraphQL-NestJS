import { Module } from '@nestjs/common';
import { DragonsService } from './dragons.service';
import { DragonsResolver } from './dragons.resolver';

@Module({
  providers: [DragonsService, DragonsResolver],
})
export class DragonsModule {}
