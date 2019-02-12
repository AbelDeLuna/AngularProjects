import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FamilyDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
