import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class LocationsService {
  constructor(private readonly httpService: HttpService) {}

  test(): Observable<AxiosResponse<any>> {
    const res = this.httpService
      .get('https://jsonplaceholder.typicode.com/posts/1')
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
