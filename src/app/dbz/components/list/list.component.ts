import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() characterList: Character[] = [];

  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void{
    this.onDelete.emit(index);
  }
}
