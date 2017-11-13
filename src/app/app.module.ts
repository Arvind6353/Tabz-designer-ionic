import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsProvider } from '../providers/products/products';
import { ProductsPageModule } from '../pages/products/products.module';
import { ProductsPage } from '../pages/products/products';
import { HttpModule } from '@angular/http'

import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductDetailPageModule } from '../pages/product-detail/product-detail.module';
import { BestSellersPageModule } from '../pages/best-sellers/best-sellers.module';
import { BestSellersPage } from '../pages/best-sellers/best-sellers';
import { FilterProductsModalPage } from '../pages/filter-products-modal/filter-products-modal';
import { FilterProductsModalPageModule } from '../pages/filter-products-modal/filter-products-modal.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ProductsPageModule,
    BestSellersPageModule,
    ProductDetailPageModule,
    FilterProductsModalPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    BestSellersPage,
    FilterProductsModalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider
  ]
})
export class AppModule {}
