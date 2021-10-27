import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class LocationsService {
  constructor(private readonly httpService: HttpService) {}

  async PlaceAutoComplete(input: string):Promise<any> {
    const response = await this.httpService
      .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}}&components=country:JO&key=AIzaSyCyCaYl9RqVL9oN6vsDK-OKYXs_vHUTtDo`)
      .toPromise();

      const places:string[]=[];
      response.data.predictions.forEach((element)=> {
        if(element.description.includes('Amman')) places.push(element.description);
      });

    return places;
  }

  // with restrictions for Amman using google maps options but inaccurate

  // async PlaceAutoComplete(input: string):Promise<any> {
  //   const response = await this.httpService
  //     .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&location=31.963158,35.930359&radius=10000&strictbounds=true&key=AIzaSyCyCaYl9RqVL9oN6vsDK-OKYXs_vHUTtDo`)
  //     .toPromise();

  //     const places:string[]=[]
  //     response.data.predictions.forEach((element)=> {
  //      if(element.description.includes('Amman')) places.push(element.description);
  //      });
  //   return places;
  // }

  // with restrictions for Amman using google maps options and piping the axios response object

  // PlaceAutoComplete(input: string): Observable<AxiosResponse<any>> {
  //   const res = this.httpService
  //     .get(
  //       `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}}&location=31.963158,35.930359&radius=10000&strictbounds=true&key=AIzaSyCyCaYl9RqVL9oN6vsDK-OKYXs_vHUTtDo`,
  //     )
  //     .pipe(
  //       map((response) => response.data.predictions)
  //     );
  //   return res;
  // }
}
