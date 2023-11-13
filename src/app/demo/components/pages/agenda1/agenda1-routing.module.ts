import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Agenda1Component } from './agenda1.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Agenda1Component }
    ])],
    exports: [RouterModule]
})
export class Agenda1RoutingModule { }
