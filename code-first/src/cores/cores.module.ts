import { Module } from '@nestjs/common';
import { CoresService } from './cores.service';
import { CoresResolver } from './cores.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [CoresService, CoresResolver],
})
export class CoresModule {}
