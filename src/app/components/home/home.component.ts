import {
  Component,
  Host,
  HostListener,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'cgyi-home',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  taskService = inject(TaskService);
  router = inject(Router);
  incompletedTasks;
  completedTasks;
  constructor() {
    this.incompletedTasks = this.taskService.incompletedTasks;
    this.completedTasks = this.taskService.completedTasks;
  }
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.code === 'KeyN' && event.altKey) {
      this.router.navigate(['/create']);
    }
  }
}
