import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [ErrorComponent, SuccessComponent],
  imports: [CommonModule, HttpClientModule, MatDialogModule, MatButtonModule],
  exports: [ErrorComponent],
})
export class SharedModule {}
