import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
//import { AgendaComponent } from './agenda/agenda.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AppInterceptor } from '../../../demo/components/utilities/app-interceptor';
@NgModule({
    declarations: [
   // AgendaComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    providers: [
   /*  {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
  } */
  ],
})
export class PagesModule { }
