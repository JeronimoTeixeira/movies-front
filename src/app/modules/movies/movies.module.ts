import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './movies.routes';
import { MoviesComponent } from './movies/movies.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [MoviesComponent],
  imports: [
    SharedModule,
    MatTableModule,
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
})
export class MoviesModule {}
