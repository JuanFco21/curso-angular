import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: true,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  imports: [
    CommonModule
  ]
})
export class ListComponent {
  @Input() characterList: Character[] = [];

  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id?: string): void {
    if (!id) return;

    console.log({ id })

    this.onDelete.emit(id);
  }
}
