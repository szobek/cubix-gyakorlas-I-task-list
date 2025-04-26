import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'cgyi-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
taskService = inject(TaskService);
text = ' ';
  incompletedTasks
  completedTasks
  constructor() {
    this.incompletedTasks = this.taskService.incompletedTasks;
    this.completedTasks = this.taskService.completedTasks();
    this.text+=this.completedTasks.length;
    console.log(this.text);
  }
  get textOfCompletedTasks(){
    return `${this.completedTasks.length} tasks completed`;
  }
}
