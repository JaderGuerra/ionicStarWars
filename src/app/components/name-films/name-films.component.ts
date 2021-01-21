import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { StarwarsService } from 'src/app/shared/services/starwars.service';

@Component({
  selector: 'app-name-films',
  templateUrl: './name-films.component.html',
  styleUrls: ['./name-films.component.scss'],
})
export class NameFilmsComponent implements OnInit {

  @Input() filmsName:string[]

  films:Film[]=[]
  
  constructor(public starWarsSVC:StarwarsService) { }

  ngOnInit() {
     this.getNameFilms()
    
  }

   getNameFilms(){

    this.filmsName.forEach((respUrls) => {
      this.starWarsSVC.httpSVC.get(respUrls).subscribe((resp:Film) => {
        this.films.push(resp)
       
      })

    })
  
  } 

}
