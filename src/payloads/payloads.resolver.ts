import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { DataSources } from 'src/datasources';
import { Launch } from 'src/launches/models/launch.model';

import { PaginatedPayload } from './models/paginated-payload.model';
import { Payload, PayloadDragon } from './models/payload.model';

@Resolver(() => Payload)
export class PayloadsResolver {
  @Query(() => [Payload], { description: 'Get all payloads' })
  async allPayloads(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Payload[]> {
    return dataSources.payloadsAPI.getAllPayloads();
  }

  @Query(() => Payload, { description: 'Get one payload' })
  async payload(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Payload> {
    return dataSources.payloadsAPI.getPayload(id);
  }

  @Query(() => PaginatedPayload, { description: 'Query payloads' })
  async payloads(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedPayload> {
    return dataSources.payloadsAPI.getPayloads(options);
  }

  @ResolveField(() => Launch)
  async launch(
    @Parent() payload: Payload,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch> {
    if (!payload.launchId) {
      return null;
    }
    return dataSources.launchesAPI.getLaunch(payload.launchId);
  }

  @ResolveField(() => PayloadDragon)
  async dragon(
    @Parent() payload: Payload,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PayloadDragon> {
    if (!payload.dragon.capsuleId) {
      return payload.dragon;
    }
    const capsule = await dataSources.capsulesAPI.getCapsule(
      payload.dragon.capsuleId,
    );
    return { ...payload.dragon, capsule };
  }
}
