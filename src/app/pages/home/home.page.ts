import { Component, OnInit } from '@angular/core';
import { Film, ResponseFilm } from 'src/app/shared/models/film';
import { StarwarsService } from 'src/app/shared/services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  films:Film[]=[]

  constructor(public startWarsSVC:StarwarsService) {
    
  }

  ngOnInit():void{
    this.showFilms()
  }

  showFilms(){
    this.startWarsSVC.getFilms().subscribe((resp) => {
      this.films = resp.results
    })
  }

  /* verCharacter(){
    console.log(character);
  } */

}
