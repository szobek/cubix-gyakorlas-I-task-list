import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'cgyi-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
taskService = inject(TaskService);
  completedTasks
  constructor() {
    this.completedTasks = this.taskService.completedTasks;
  }
  get textOfCompletedTasks(){
    return `${this.completedTasks().length} tasks completed`;
  }
}
