import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: true,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [
    CommonModule
  ]
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];
}
