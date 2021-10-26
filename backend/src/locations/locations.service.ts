import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class LocationsService {
  constructor(private readonly httpService: HttpService) {}

  PlaceAutoComplete(input): Observable<AxiosResponse<any>> {
    
    const res = this.httpService
      .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}}&components=country:JO&key=AIzaSyCyCaYl9RqVL9oN6vsDK-OKYXs_vHUTtDo`)
      .pipe(map((response) => response.data));

    return res;
  }

  // async getHello(): Promise<AxiosResponse<any>> {
  //   const response = await this.httpService
  //     .get('https://jsonplaceholder.typicode.com/posts/1')
  //     .toPromise();
  //   return response.data;
  // }
}
