// this file is handle api request or response 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/network/ApiResponse';
import { SnackbarService } from '../snackbar/snackbar.service';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HtppPost } from 'src/app/models/network/HttpPost';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient,
    private sbService: SnackbarService
    ) { }

  // http methode to handle api request and response
  // chain multiple RxJS operators-pipe()
  // The map operator transforms the response data (res) into an instance of ApiResponse
  // tap operator is used to perform side-effects. 
  // transforms the response data (res) into an instance of ApiResponse
  //  

 private onHttpSuccess(res: ApiResponse, showSnackBar: boolean, showSnackBarOnError: boolean) {
    if (showSnackBar && res.showSuccesSnackBar) {
      this.sbService.openSnackBar(res.data)
    }

    if (showSnackBarOnError && res.showErrorSnackbar) {
      this.sbService.openSnackBar(res.description)
    }
  }

  httpGet(url: string, params: any = null, showSnackBar = false, showSnackBarOnError = true) {
    return this.http.get(
      url,
      {
        params: params
      }
    ).pipe(
      map((res: any) => new ApiResponse(res)),
      tap((res: ApiResponse) => {
        this.onHttpSuccess(res, showSnackBar, showSnackBarOnError)
        return res
      }),
      catchError(this.handleError)
    )
  }

  httpPost({ url, params = null, body = null, showSnackBar = false, showSnackBarOnError = true }: HtppPost) {
    return this.http.post(
      url,
      body,
      {
        params: params,
      }
    ).pipe(
      map((res: any) => new ApiResponse(res)),
      tap((res: ApiResponse) => {
        this.onHttpSuccess(res, showSnackBar, showSnackBarOnError)
        return res
      }),
      catchError(this.handleError)
    )
  }

  private handleCustomError(res: any) {

    if (res && res.description) {
      return res.description
    }

    return null

  }

  httpGetFile({ url, params = null, body = null, showSnackBar = false, showSnackBarOnError = true }: HtppPost) {

    const options = {
      params,
      observe: 'response' as 'response',
      responseType: 'blob' as 'blob',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post(
      url,
      body,
      options,
    ).pipe(
      map((res: any) => res),
      tap((res: any) => {
        this.onHttpSuccess(res, showSnackBar, showSnackBarOnError)
        return res
      }),
      catchError(this.handleError)
    )
  }

  private handleError = (error: HttpErrorResponse) => {
    let errorMessage = ''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      errorMessage = "Network Error"
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      //Access custom error from which is sent from backend
      errorMessage = this.handleCustomError(error.error)

      if (!errorMessage) {
        errorMessage = `Something went wrong, Error code : ${error.status}`
      }

    }

    if (!errorMessage) {
      errorMessage = 'Something went wrong; Please try again later.'
    }

    this.sbService.openSnackBar(errorMessage)

    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }
}


