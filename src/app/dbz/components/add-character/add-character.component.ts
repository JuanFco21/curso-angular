import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, 
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    console.log(this.character);
    if (this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0}
  }
}
