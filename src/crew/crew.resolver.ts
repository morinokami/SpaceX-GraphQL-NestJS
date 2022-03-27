import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { CrewService } from './crew.service';
import { Crew } from './models/crew.model';
import { PaginatedCrew } from './models/paginated-crew-model';

@Resolver(() => Crew)
export class CrewResolver {
  constructor(
    private readonly crewService: CrewService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Crew], { description: 'Get all crew' })
  async allCrew(): Promise<Crew[]> {
    return this.crewService.getAllCrew();
  }

  @Query(() => Crew, { description: 'Get one crew' })
  async crew(@Args('id') id: string): Promise<Crew> {
    return this.crewService.getCrew(id);
  }

  @Query(() => PaginatedCrew, { description: 'Query crew' })
  async crews(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedCrew> {
    return this.crewService.getCrews(options);
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() crew: Crew): Promise<Launch[]> {
    return Promise.all(
      crew.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
