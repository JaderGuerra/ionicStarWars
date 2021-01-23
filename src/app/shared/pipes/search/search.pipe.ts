import { Pipe, PipeTransform } from "@angular/core";
import { Character } from "../../models/film";

@Pipe({
  name: "SearchPipe",
})
export class SearchPipe implements PipeTransform {
  transform(characters: Character[], value: string): any[] {
    if (!value) return characters;

    return characters.filter((resp) => {
      const gender = resp.gender.toUpperCase().includes(value.toUpperCase());
      const eyeColor = resp.eye_color
        .toUpperCase()
        .includes(value.toUpperCase());

      return eyeColor || gender;
    });
  }
}
