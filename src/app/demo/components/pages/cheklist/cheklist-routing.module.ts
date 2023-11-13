import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheklistComponent } from './cheklist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CheklistComponent }
    ])],
    exports: [RouterModule]
})
export class CheklistRoutingModule { }
