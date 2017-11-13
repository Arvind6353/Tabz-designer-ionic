import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterProductsModalPage } from './filter-products-modal';

@NgModule({
  declarations: [
    FilterProductsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterProductsModalPage),
  ],
})
export class FilterProductsModalPageModule {}
