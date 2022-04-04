import { Module } from '@nestjs/common';
import { DragonsResolver } from './dragons.resolver';

@Module({
  providers: [DragonsResolver],
})
export class DragonsModule {}
