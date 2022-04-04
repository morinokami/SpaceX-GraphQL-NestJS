import { Module } from '@nestjs/common';
import { StarlinkResolver } from './starlink.resolver';

@Module({
  providers: [StarlinkResolver],
})
export class StarlinkModule {}
