import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the EditReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * Tips source: https://toddmotto.com/angular-constructor-ngoninit-lifecycle-hook
 * 
 */

//@IonicPage()
@Component({
  selector: 'page-edit-review',
  templateUrl: 'edit-review.html',
})
export class EditReviewPage {

  title: any;
  description: any;
  rating: any;
  oldTitle: any;
  @ViewChild("newTitle") newTitle;
 
  constructor(public viewCtrl: ViewController, public params: NavParams, public alertCtrl: AlertController, public loading: LoadingController, public modalCtrl: ModalController) {
  }

  ngOnInit(){
    this.title = this.params.get('title');
    this.description = this.params.get('description');
    this.rating = this.params.get('rating');
    this.oldTitle = this.params.get('title');
    // console.log(this.title)
  }

  ionViewDidLoad() {
    console.log('EditReviewPage');
  }

  save(): void {
 
    if (this.newTitle.value=="") {
      let alert = this.alertCtrl.create({
        title:"ATTENTION",
        subTitle:"Title field is empty",
        buttons:['OK']
      });
      alert.present();
    }
    else 
    {
      let review = {
        title: this.title,
        description: this.description,
        rating: this.rating
      };
      this.viewCtrl.dismiss(review);
    }
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}
