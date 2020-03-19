import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item2 } from '../../models/item/item.model';
import { CRUDService } from '../../services/CRUDservice/crud.service';
import { Item3 } from '../../models/item2.model';
import { HomePage } from '../home/home';
// import { UpdatePage } from '../update/update';

/**
 * Generated class for the AddQPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-q',
  templateUrl: 'add-q.html',
})
export class AddQPage {

  item: Item2 ={
    question : '',
    qid : 0,
    hint : '',
    type: 0,
    phase: 0,
    qnum: 0
  };

  item2: Item3 = {
    answer: '',
    qid: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private crudservice: CRUDService) {
    // this.navCtrl = navCtrl;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddQPage');
  // }

  addtoDb(){
    this.crudservice.addQuestion(this.item);
    this.crudservice.addAnswer(this.item2);
    this.navCtrl.push(HomePage);
    console.log('QID is: ',this.item.qid);
    // this.navCtrl.push(UpdatePage, this.item);
  }

  // addAnsToDb(){
  //   this.crudservice.addAnswer(this.item2);
  // }

}
