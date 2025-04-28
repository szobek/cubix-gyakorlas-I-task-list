import { Directive, ElementRef, inject, Input } from '@angular/core';
import { Task } from '../models/task';

@Directive({
  selector: '[cgyiTaskDetail]'
})
export class TaskDetailDirective {
@Input() cgyiTaskDetail?: Task;
private readonly elem = inject(ElementRef);
    ngOnInit(): void {
      if (this.cgyiTaskDetail && this.cgyiTaskDetail.completed) {
        this.elem.nativeElement.style.backgroundColor = '#5e926e';
      }else{
        this.elem.nativeElement.style.backgroundColor = '#f8d7da';
      }
  }

}
