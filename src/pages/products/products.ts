import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products/products';
import { ProductDetailPage } from '../product-detail/product-detail';
import { FilterProductsModalPage } from '../filter-products-modal/filter-products-modal';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products= [];
  femaleSelected = true;
  maleSelected = true;

  constructor(public productsProvider : ProductsProvider,public navCtrl: NavController, public navParams: NavParams
  , public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.productsProvider.getProducts()
    .subscribe(data => this.products = data);
  }

  goToDetailsPage(product) {
    this.navCtrl.push(ProductDetailPage,{
      productDetails: product
    })
  }

  openFilterModal() {
    let filterParam = {
      femaleSelected : this.femaleSelected,
      maleSelected : this.maleSelected
    }
    let filterModal = this.modalCtrl.create(FilterProductsModalPage,filterParam );

    filterModal.onDidDismiss((filterState)=>{
      this.femaleSelected = filterState.femaleSelected;
      this.maleSelected = filterState.maleSelected;

      this.productsProvider.getProducts()
        .subscribe((allProducts)=> {
          let products = allProducts;
          if (filterState.maleSelected && filterState.femaleSelected){
            this.products = products;
            return;
          } else if (!filterState.maleSelected && !filterState.femaleSelected){
            this.products = [];
            return;

          } else if(filterState.femaleSelected && !filterState.maleSelected){
            this.products = products.filter((product)=>{
              return product.gender !== "male";
            });

          } else {
            this.products = products.filter((product)=>{
              return product.gender !== "female";
            });
          }
        });
    });

    filterModal.present();
  }

}
