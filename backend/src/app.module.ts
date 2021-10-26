import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsController } from './locations/locations.controller';
import { LocationsService } from './locations/locations.service';


@Module({
  imports: [HttpModule],
  controllers: [AppController, LocationsController],
  providers: [AppService, LocationsService],
})
export class AppModule {}
