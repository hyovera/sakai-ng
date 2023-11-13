import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheklistRoutingModule } from './cheklist-routing.module';
import { CheklistComponent } from './cheklist.component';

@NgModule({
    imports: [
        CommonModule,
        CheklistRoutingModule,
      
    ],
    declarations: [CheklistComponent]
})
export class CheklistModule { }
