import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterProductsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-products-modal',
  templateUrl: 'filter-products-modal.html',
})
export class FilterProductsModalPage {

  femaleSelected = true;
  maleSelected = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewController : ViewController) {

    this.femaleSelected = this.navParams.get('femaleSelected');
    this.maleSelected = this.navParams.get('maleSelected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterProductsModalPage');
  }

  closeModal(){
    let filterState = {
       femaleSelected: this.femaleSelected,
       maleSelected: this.maleSelected
     };
    this.viewController.dismiss(filterState);

  }

}
