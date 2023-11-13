import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agenda1RoutingModule } from './agenda1-routing.module';
import { Agenda1Component } from './agenda1.component';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { AutoCompleteModule } from "primeng/autocomplete";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DatePipe } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        Agenda1RoutingModule,
        TabViewModule,DropdownModule,ToastModule,ReactiveFormsModule,ProgressSpinnerModule,
        ToolbarModule,ButtonModule,TableModule,DialogModule,InputTextModule,CalendarModule,AutoCompleteModule,
        FormsModule
    ],
    declarations: [Agenda1Component],
    providers: [DatePipe],
})
export class Agenda1Module { }
