import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from 'src/app/shared/services/starwars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters:string[] = []

  constructor(private ac:ActivatedRoute,
              public starwarsSVC:StarwarsService) { }

  ngOnInit() {
     this.verLisCharacters()
      
  }

  verLisCharacters(){
    const id = this.ac.snapshot.paramMap.get('id')
    this.starwarsSVC.getCharacters(id).subscribe((resp) => {  
      console.log(resp.characters);
    })
  }
 
}
