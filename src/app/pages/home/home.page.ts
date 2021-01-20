import { Component } from '@angular/core';
import { Film, ResponseFilm } from 'src/app/shared/models/film';
import { StarwarsService } from 'src/app/shared/services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films:Film[]=[]

  constructor(public startWarsSVC:StarwarsService) {
    this.showFilms()
    console.log();
  }

  showFilms(){
    this.startWarsSVC.getFilms().subscribe((resp) => {
      this.films.push(resp.results)
    })
  }

}
