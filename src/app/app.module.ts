import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './demo/components/utilities/app-interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

//import { LoadingService } from '../../src/app/demo/service/LoadingService';
import { LoadingSpinnerComponent } from '../../src/app/demo/components/loading-spinner/loading-spinner.component';
@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,LoadingSpinnerComponent
    ],
    imports: [
        NgxSpinnerModule,
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
    
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true,
    },
  //  LoadingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
