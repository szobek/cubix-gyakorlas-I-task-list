import { Injectable, signal, WritableSignal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  completeTask(task: Task) {
    this.tasks.update((tasks) => {
      const index = this.findIndex(task.id);
      if (index !== -1) {
        tasks[index].completed = true;
      }
      return tasks;
    });
  }
  
  inCompleteTask(task: Task) {
    this.tasks.update((tasks) => {
      const index = this.findIndex(task.id);
      if (index !== -1) {
        tasks[index].completed = false;
      }
      return tasks;
    });
  }
  tasks: WritableSignal<Task[]> = signal([]);
  private findIndex(id: number): number {
    return this.tasks().findIndex((task) => task.id === id);
  }
}
