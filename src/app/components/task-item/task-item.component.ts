import {
  Component,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskNamePipe } from '../../pipes/task-name.pipe';
import { TaskDetailDirective } from '../../directivas/task-detail.directive';

@Component({
  selector: 'cgyi-task-item',
  imports: [CommonModule,TaskNamePipe,TaskDetailDirective],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  private _task?: any;
  taskService = inject(TaskService);
  @Input({ required: true }) set task(task: Task) {
    this._task = task;
  }
  get task(): Task | undefined {
    return this._task;
  }
  completeTask(task: Task) {
    this.taskService.completeTask(task);
  }
  inCompleteTask(task: Task) {
    this.taskService.inCompleteTask(task);
  }
  deleteTask(task: Task) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task);
    }
  }
  markTaskAsImportant(task: Task) {
    this.taskService.markTaskAsImportant(task);
  }
  markTaskAsUnimportant(task: Task) {
    this.taskService.markTaskAsUnimportant(task);
  }
}
