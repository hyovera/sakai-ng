// loading-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

import { LoadingService } from '../../service/LoadingService';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {}

  

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Code for intercepting and handling HTTP requests
       // this.loadingService.showLoading(); // Show loading spinner
       //debugger;
       this.loadingService.show();
      //  alert("cargado");
      //  debugger;

    return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              //  this.loadingService.hideLoading(); // Hide loading spinner on successful response
              this.loadingService.hide();
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            const started = Date.now();
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
           // debugger;
         //  this.loadingService.hideLoading();
         this.loadingService.hide();
            return throwError(error); // Propagate the error
        })
    );
    }
}
