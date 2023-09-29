import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTHENTICATE } from 'src/app/constant.ts/api-constants';
import { environment } from 'src/environments/environment';
import { getToken } from '../local-storage';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let headers=new HttpHeaders({'Content-Type': 'application/json',
  });

  if(request.url !==AUTHENTICATE){
    const token=getToken();
   headers= headers.append('Authorization',`Bearer${token}`);
  }
   const newRequest = request.clone(
      {
        url: ` ${environment.api}${request.url}`,
        headers: headers
      }
    )
    return next.handle(newRequest);
  }
}
