import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { TextComponent } from './components/text/text.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { MailComponent } from './components/mail/mail.component';
import { DomainComponent } from './components/domain/domain.component';
import { PhoneComponent } from './components/phone/phone.component';

@NgModule({
  declarations: [
    SharedTableComponent,
    IconComponent,
    ButtonComponent,
    TextComponent,
    MailComponent,
    DomainComponent,
    PhoneComponent,
  ],
  exports: [SharedTableComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [
    IconComponent,
    TextComponent,
    ButtonComponent,
    DomainComponent,
    MailComponent,
    PhoneComponent,
  ],
})
export class SharedModule {}
