import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { AddReviewPage } from '../add-review/add-review';
import { EditReviewPage } from '../edit-review/edit-review';
import { Reviews } from '../../providers/reviews/reviews';
 
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  reviews: any;
 
  constructor(public nav: NavController, public reviewService: Reviews, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
 
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AddReviewPage);
 
    modal.onDidDismiss(review => {
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review);       
      }
    });
 
    modal.present();
 
  }
 
  updateReview(review){
 
    //Update Locally
      let index = this.reviews.indexOf(review);
 
      // Push the review value to the popup window
      let modal = this.modalCtrl.create(EditReviewPage,review);
 
      modal.onDidDismiss(review => {
        if(review){
          this.reviews.splice(index, 1, review);
          this.reviewService.updateReview(review._id);       
        }
      });
   
      modal.present();
      // This is going to create a new page instead of a popup window
      // this.nav.push(EditReviewPage,review)
  } 

  deleteReview(review){
 
    //Remove locally
      let index = this.reviews.indexOf(review);
 
      if(index > -1){
        this.reviews.splice(index, 1);
      }  
 
    //Remove from database
    this.reviewService.deleteReview(review._id);
  }
 
}