import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomRadioButtonComponent } from './custom-radio-button.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [CustomRadioButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule],
  exports: [CustomRadioButtonComponent],
})
export class CustomRadioButtonModule {}
