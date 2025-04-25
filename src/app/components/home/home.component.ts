import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'cgyi-home',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  taskService=inject(TaskService);
  tasks
  constructor() {
    this.tasks= this.taskService.tasks;
  }
  
 
}
