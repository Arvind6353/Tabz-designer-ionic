import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';



/**
 * Generated class for the BestSellersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-best-sellers',
  templateUrl: 'best-sellers.html',
})
export class BestSellersPage {

  bestSellerProducts =[];

  constructor(public productsProvider : ProductsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BestSellersPage');
    this.productsProvider.getProducts()
    .subscribe(products => this.bestSellerProducts = products.filter(product => product.bestSeller == true));

  }

}
