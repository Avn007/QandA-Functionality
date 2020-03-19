import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Item2 } from '../../models/item/item.model';
import { CRUDService } from '../../services/CRUDservice/crud.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  item: Item2 = {
    question: '',
    qid: 0,
    hint: '',
    type: 0,
    phase: 0,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private crudservice: CRUDService) {
  }

  // olditem = this.navParams.get('item');


  // updateQ(){
  //   this.crudservice.updateQuestion(this.olditem, this.newitem);
  // }

  ionViewWillLoad(){
    this.item = this.navParams.get('item');
    // console.log(this.navParams.get('item'));
  }

  updateQ(item: Item2){
    this.crudservice.updateQuestion(item)
    this.navCtrl.push(HomePage);
  }

}
