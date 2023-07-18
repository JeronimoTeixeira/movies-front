import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISuccess } from '../../interfaces/success.interface';

@Component({
  selector: 'movies-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public success: ISuccess) {}

}
