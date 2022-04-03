import { forwardRef, Module } from '@nestjs/common';
import { CoresService } from './cores.service';
import { CoresResolver } from './cores.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { CoresDataLoader } from './cores.dataloader';

@Module({
  imports: [forwardRef(() => LaunchesModule)],
  providers: [CoresService, CoresResolver, CoresDataLoader],
  exports: [CoresDataLoader],
})
export class CoresModule {}
