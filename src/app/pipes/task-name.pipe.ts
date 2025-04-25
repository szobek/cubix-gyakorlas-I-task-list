import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskName'
})
export class TaskNamePipe implements PipeTransform {

  transform(title: string): string {
    return `Title: ${title}`;
  }

}
