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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"movil-2024b","appId":"1:1095177160052:web:6f2cb16ba99e8aec905821","storageBucket":"movil-2024b.firebasestorage.app","apiKey":"AIzaSyBYYBnkiZvkpKHY6gI9S7F0AhZltmprlto","authDomain":"movil-2024b.firebaseapp.com","messagingSenderId":"1095177160052","measurementId":"G-473NX1V5MN"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
