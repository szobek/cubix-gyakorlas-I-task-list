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

@Component({
  selector: 'cgyi-task-item',
  imports: [CommonModule,TaskNamePipe],
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
    this.taskService.deleteTask(task);
  }
}
