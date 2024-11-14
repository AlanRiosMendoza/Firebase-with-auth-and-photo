import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({
    "apiKey": "AIzaSyBYYBnkiZvkpKHY6gI9S7F0AhZltmprlto",
    "authDomain": "movil-2024b.firebaseapp.com",
    "projectId": "movil-2024b",
    "storageBucket": "movil-2024b.firebasestorage.app",
    "messagingSenderId": "1095177160052",
    "appId": "1:1095177160052:web:6f2cb16ba99e8aec905821",
    "measurementId": "G-473NX1V5MN"
  })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
