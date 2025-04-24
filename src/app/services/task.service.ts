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
    this.saveTasks();
  }
  
  inCompleteTask(task: Task) {
    this.tasks.update((tasks) => {
      const index = this.findIndex(task.id);
      if (index !== -1) {
        tasks[index].completed = false;
      }
      return tasks;
    });
    this.saveTasks();
  }
  tasks: WritableSignal<Task[]> = signal([]);
  private loadTasks() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];
  }
  constructor() {
    this.tasks.set(this.loadTasks());
  }
  private findIndex(id: number): number {
    return this.tasks().findIndex((task) => task.id === id);
  }

  addTask(task: Task) {
    return new Promise((resolve) => {
      this.tasks.update((tasks) => [...tasks, task]);
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
      resolve(true)
    });
  }
  private saveTasks() {
    return new Promise((resolve) => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
      resolve(true);
    });
  }
}
