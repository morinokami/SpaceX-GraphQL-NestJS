import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { CapsulesModule } from './capsules/capsules.module';
import { CompanyInfoModule } from './company-info/company-info.module';
import { CoresModule } from './cores/cores.module';
import { CrewModule } from './crew/crew.module';
import {
  CapsulesAPI,
  CompanyInfoAPI,
  CoresAPI,
  CrewAPI,
  DragonsAPI,
  HistoryAPI,
  LandpadsAPI,
  LaunchesAPI,
  LaunchpadsAPI,
  PayloadsAPI,
  RoadsterInfoAPI,
  RocketsAPI,
  ShipsAPI,
  StarlinkAPI,
} from './datasources';
import { DragonsModule } from './dragons/dragons.module';
import { HistoryModule } from './history/history.module';
import { LandpadsModule } from './landpads/landpads.module';
import { LaunchesModule } from './launches/launches.module';
import { LaunchpadsModule } from './launchpads/launchpads.module';
import { PayloadsModule } from './payloads/payloads.module';
import { RoadsterInfoModule } from './roadster-info/roadster-info.module';
import { RocketsModule } from './rockets/rockets.module';
import { ShipsModule } from './ships/ships.module';
import { StarlinkModule } from './starlink/starlink.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      introspection: true,
      // https://github.com/nestjs/graphql/issues/229
      dataSources: () => {
        return {
          capsulesAPI: new CapsulesAPI(),
          companyInfoAPI: new CompanyInfoAPI(),
          coresAPI: new CoresAPI(),
          crewAPI: new CrewAPI(),
          dragonsAPI: new DragonsAPI(),
          historyAPI: new HistoryAPI(),
          landpadsAPI: new LandpadsAPI(),
          launchesAPI: new LaunchesAPI(),
          launchpadsAPI: new LaunchpadsAPI(),
          payloadsAPI: new PayloadsAPI(),
          roadsterInfoAPI: new RoadsterInfoAPI(),
          rocketsAPI: new RocketsAPI(),
          shipsAPI: new ShipsAPI(),
          starlinkAPI: new StarlinkAPI(),
        };
      },
    }),
    CapsulesModule,
    CompanyInfoModule,
    CoresModule,
    CrewModule,
    DragonsModule,
    HistoryModule,
    LandpadsModule,
    LaunchesModule,
    LaunchpadsModule,
    PayloadsModule,
    RoadsterInfoModule,
    RocketsModule,
    ShipsModule,
    StarlinkModule,
  ],
})
export class AppModule {}
