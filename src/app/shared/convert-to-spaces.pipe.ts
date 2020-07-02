import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'removespaces',
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(word: string, charecter: string) {
    return word.replace(charecter, ' ');
  }
}
