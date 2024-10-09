import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page-component';
import { ListComponent } from '../heroes/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ListComponent,
    AddCharacterComponent
  ]
})
export class DbzModule { }
