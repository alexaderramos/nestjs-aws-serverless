import { SwapiModule } from './swapi/swapi.module';
import { CONFIG_DATABASE } from './shared/infrastructure/config-database';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CONFIG_DATABASE(), UsersModule, SwapiModule],
})
export class AppModule {}
