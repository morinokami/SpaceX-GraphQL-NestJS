import { Module } from '@nestjs/common';

import { LandpadsResolver } from './landpads.resolver';

@Module({
  providers: [LandpadsResolver],
})
export class LandpadsModule {}
