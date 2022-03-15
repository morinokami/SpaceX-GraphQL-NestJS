import { Query, Resolver } from '@nestjs/graphql';
import { FooService } from './foo.service';
import { Foo } from './models/foo.model';

@Resolver()
export class FooResolver {
  constructor(private readonly fooService: FooService) {}

  @Query(() => Foo)
  async foo(): Promise<Foo> {
    return this.fooService.findOne();
  }
}
