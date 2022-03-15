import { Injectable } from '@nestjs/common';
import { Foo } from './models/foo.model';

@Injectable()
export class FooService {
  async findOne(): Promise<Foo> {
    return { bar: 'baz' };
  }
}
