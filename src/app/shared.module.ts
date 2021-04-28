import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/shared-table/button/button.component';
import { IconComponent } from './components/shared-table/icon/icon.component';
import { TextComponent } from './components/shared-table/text/text.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';

@NgModule({
  declarations: [SharedTableComponent],
  exports: [SharedTableComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [IconComponent, TextComponent, ButtonComponent],
})
export class SharedModule {}
