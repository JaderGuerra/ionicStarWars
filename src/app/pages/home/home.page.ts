import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film,} from 'src/app/shared/models/film';
import { StarwarsService } from 'src/app/shared/services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  films:Film[] = []

  constructor(public startWarsSVC:StarwarsService,private router:Router) {}

  ngOnInit():void{
    this.showFilms()
  }

  showFilms(){
    this.startWarsSVC.getFilms().subscribe((resp) => {
      this.films = resp.results
    })
  }


   verCharacter(index:number){
    this.router.navigate(['/characters',index])
  } 
 


}
