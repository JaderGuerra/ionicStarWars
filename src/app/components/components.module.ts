import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NameFilmsComponent } from "./name-films/name-films.component";

@NgModule({
  declarations: [NameFilmsComponent],
  imports: [CommonModule],
  exports: [NameFilmsComponent],
})
export class ComponentsModule {}
