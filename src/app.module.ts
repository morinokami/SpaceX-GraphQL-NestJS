import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CapsulesModule } from './capsules/capsules.module';
import { LaunchesModule } from './launches/launches.module';
import { ShipsModule } from './ships/ships.module';
import { CompanyInfoModule } from './company-info/company-info.module';
import { CoresModule } from './cores/cores.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
    }),
    CapsulesModule,
    LaunchesModule,
    ShipsModule,
    CompanyInfoModule,
    CoresModule,
  ],
})
export class AppModule {}
