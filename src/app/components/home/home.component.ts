import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cgyi-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  taskService=inject(TaskService);
  tasks
  constructor() {
    this.tasks= this.taskService.tasks;
  }
  completeTask(task: Task) {
  this.taskService.completeTask(task);
  }
  inCompleteTask(task: Task) {
  this.taskService.inCompleteTask(task);
  }
 
}
