import { Component, inject, signal, WritableSignal } from '@angular/core';
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
  incompletedTasks
  completedTasks
  constructor() {
    this.incompletedTasks= this.taskService.incompletedTasks;
    this.completedTasks= this.taskService.completedTasks;
  }
}
