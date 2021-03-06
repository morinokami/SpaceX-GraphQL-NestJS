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

import { Crew } from './models/crew.model';
import { PaginatedCrew } from './models/paginated-crew-model';

@Resolver(() => Crew)
export class CrewResolver {
  @Query(() => [Crew], { description: 'Get all crew' })
  async allCrew(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Crew[]> {
    return dataSources.crewAPI.getAllCrew();
  }

  @Query(() => Crew, { description: 'Get one crew' })
  async crew(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Crew> {
    return dataSources.crewAPI.getCrew(id);
  }

  @Query(() => PaginatedCrew, { description: 'Query crew' })
  async crews(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedCrew> {
    return dataSources.crewAPI.getCrews(options);
  }

  @ResolveField(() => [Launch])
  async launches(
    @Parent() crew: Crew,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return Promise.all(
      crew.launchIds.map((id) => dataSources.launchesAPI.getLaunch(id)),
    );
  }
}
