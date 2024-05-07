import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  // ? BOTH OPTIONS ARE CORRECT public onDeleteCharacter: EventEmitter<Character> = new EventEmitter();
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }];

  onDelete(id?:string):void{
    if (!id) return;
    // ? BOTH OPTIONS ARE CORRECT this.characterList.splice(index)
    this.onDeleteCharacter.emit(id)
  }
}
