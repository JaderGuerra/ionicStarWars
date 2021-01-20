import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() filmsArray:Film[]
  
  constructor() { }

  ngOnInit() {}
  verCharacter(character){
    console.log(character);
  } 
}
