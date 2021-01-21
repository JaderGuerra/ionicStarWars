import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';
import { CardComponent } from 'src/app/components/card/card.component';
import { NameFilmsComponent } from 'src/app/components/name-films/name-films.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule
  ],
  declarations: [CharactersPage,CardComponent,NameFilmsComponent]
})
export class CharactersPageModule {}
