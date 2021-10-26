import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
