/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.modules';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],

})
export class AppModule { }
