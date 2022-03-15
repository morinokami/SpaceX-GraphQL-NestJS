import { Module } from '@nestjs/common';
import { FooService } from './foo.service';
import { FooResolver } from './foo.resolver';

@Module({
  providers: [FooService, FooResolver],
})
export class FooModule {}
