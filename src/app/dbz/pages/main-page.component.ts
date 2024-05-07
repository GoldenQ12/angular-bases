import { Character } from '../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    constructor(private dbzservice: DbzService) {}
    get character(): Character[]{
      return [...this.dbzservice.characters];
    }

    onDeleteCharacter(id:string):void{
      this.dbzservice.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void{
      this.dbzservice.onNewCharacter(character);
    }
}
