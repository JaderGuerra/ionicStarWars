import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseCharacter, ResponseFilm } from '../models/film';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(public httpSVC:HttpClient) { }

  getFilms(){
    return this.httpSVC.get<ResponseFilm>('https://swapi.dev/api/films')
  }

  getCharacters(id: string) {
    return this.httpSVC.get<ResponseCharacter>(`https://swapi.dev/api/films/${id}`);
  }
}
