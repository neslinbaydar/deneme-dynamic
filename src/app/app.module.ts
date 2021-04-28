import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/shared-table/icon/icon.component';
import { TextComponent } from './components/shared-table/text/text.component';
import { ButtonComponent } from './components/shared-table/button/button.component';

@NgModule({
  declarations: [AppComponent, IconComponent, TextComponent, ButtonComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
