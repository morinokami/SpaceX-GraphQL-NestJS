import { Module } from '@nestjs/common';
import { StarlinkService } from './starlink.service';
import { StarlinkResolver } from './starlink.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [StarlinkService, StarlinkResolver],
})
export class StarlinkModule {}
