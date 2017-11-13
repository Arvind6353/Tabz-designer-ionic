import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestSellersPage } from './best-sellers';

@NgModule({
  declarations: [
    BestSellersPage,
  ],
  imports: [
    IonicPageModule.forChild(BestSellersPage),
  ],
})
export class BestSellersPageModule {}
