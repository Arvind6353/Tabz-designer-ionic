import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { ProductsPage } from '../products/products';
import { BestSellersPage } from '../best-sellers/best-sellers';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductsPage;
  tab2Root = BestSellersPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
