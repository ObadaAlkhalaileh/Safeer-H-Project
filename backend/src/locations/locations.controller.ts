import { Controller, Get, Param, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('/restricted')
  PlaceAutoCompleteRestricted(
    @Query('place') place: string,
    @Query('country') country: string,
  ) {
    return this.locationsService.PlaceAutoCompleteRestricted(place, country);
  }

  @Get(':input')
  PlaceAutoComplete(@Param('input') place: string) {
    return this.locationsService.PlaceAutoComplete(place);
  }
}
