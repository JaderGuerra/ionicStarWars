import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() filmsArray:Film[]
  
  constructor(private router:Router) { }

  ngOnInit() {}

  verCharacter(character:Film){
    this.router.navigate(['/characters',character.episode_id])
  } 
  
}
