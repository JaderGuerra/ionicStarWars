import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from 'src/app/shared/services/starwars.service';

import { Character } from "../../shared/models/film";



@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  
  
  characters:Character[] = []

  constructor(private ac:ActivatedRoute,
              public starwarsSVC:StarwarsService) { }

  ngOnInit() {
     this.charactersSeleccionados()
  }

  charactersSeleccionados(){
    const id = this.ac.snapshot.paramMap.get('id')
    this.starwarsSVC.getCharacters(id).subscribe((resp) => {
      this.showCharacters(resp.characters)
    })
  }

  showCharacters(characters:string[]){
    
    characters.map((urlCharacters) => {
     
      this.starwarsSVC.httpSVC.get(urlCharacters).subscribe((dataCharacters:Character) => {
        this.characters.push(dataCharacters);
      })
    
    })
  }

 
}
