import { forwardRef, Module } from '@nestjs/common';
import { PayloadsService } from './payloads.service';
import { PayloadsResolver } from './payloads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { CapsulesModule } from 'src/capsules/capsules.module';
import { PayloadsDataLoader } from './payloads.dataloader';

@Module({
  imports: [forwardRef(() => LaunchesModule), forwardRef(() => CapsulesModule)],
  providers: [PayloadsService, PayloadsResolver, PayloadsDataLoader],
  exports: [PayloadsDataLoader],
})
export class PayloadsModule {}
