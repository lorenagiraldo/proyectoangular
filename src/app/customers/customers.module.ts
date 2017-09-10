import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { ComponentComponent } from './component/component.component';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddComponent, IndexComponent, ComponentComponent, CustomersComponent]
})
export class CustomersModule { }
