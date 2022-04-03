import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Payload } from './models/payload.model';
import { PayloadsService } from './payloads.service';

@Injectable({ scope: Scope.REQUEST })
export class PayloadsDataLoader extends DataLoader<string, Payload> {
  constructor(private readonly payloadsService: PayloadsService) {
    super((ids: string[]) => {
      return this.payloadsService.getPayloadsByIds(ids);
    });
  }
}
