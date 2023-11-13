import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule,
        TabViewModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
