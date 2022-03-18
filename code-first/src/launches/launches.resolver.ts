import { Query, Resolver } from '@nestjs/graphql';
import { LaunchesService } from './launches.service';
import { Launch } from './models/launch.model';

@Resolver()
export class LaunchesResolver {
  constructor(private readonly launchesService: LaunchesService) {}

  @Query(() => [Launch], { description: 'Get all launches' })
  async allLaunches(): Promise<Launch[]> {
    return this.launchesService.getAllLaunches();
  }
}
