import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFilm } from '../models/film';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private httpSVC:HttpClient) { }

  getFilms(){
    return this.httpSVC.get<ResponseFilm>('https://swapi.dev/api/films')
  }
}
