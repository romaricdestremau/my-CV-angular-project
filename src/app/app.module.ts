import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFirstSectionComponent } from './app-first-section/app-first-section.component';
import { AppSecondSectionComponent } from './app-second-section/app-second-section.component';
import { AppThirdSectionComponent } from './app-third-section/app-third-section.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppFourthSectionComponent } from './app-fourth-section/app-fourth-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHeaderComponent,
    AppFirstSectionComponent,
    AppSecondSectionComponent,
    AppThirdSectionComponent,
    AppFooterComponent,
    AppFourthSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
