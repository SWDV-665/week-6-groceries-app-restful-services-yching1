import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReviewPage } from '../pages/add-review/add-review';
import { EditReviewPage } from '../pages/edit-review/edit-review';
import { Reviews } from '../providers/reviews/reviews';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReviewPage,
    EditReviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReviewPage,
    EditReviewPage
  ],
  providers: [Reviews, StatusBar, SplashScreen]
})
export class AppModule {}