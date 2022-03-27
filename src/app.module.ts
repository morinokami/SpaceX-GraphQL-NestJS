import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CapsulesModule } from './capsules/capsules.module';
import { LaunchesModule } from './launches/launches.module';
import { ShipsModule } from './ships/ships.module';
import { CompanyInfoModule } from './company-info/company-info.module';
import { CoresModule } from './cores/cores.module';
import { RoadsterInfoModule } from './roadster-info/roadster-info.module';
import { StarlinkModule } from './starlink/starlink.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
    CapsulesModule,
    LaunchesModule,
    ShipsModule,
    CompanyInfoModule,
    CoresModule,
    RoadsterInfoModule,
    StarlinkModule,
  ],
})
export class AppModule {}
