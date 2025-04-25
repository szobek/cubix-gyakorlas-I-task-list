import { Injectable, signal, WritableSignal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  incompletedTasks: WritableSignal<Task[]> = signal([]);
  completedTasks: WritableSignal<Task[]> = signal([]);

  completeTask(task: Task) {
    this.incompletedTasks.update((tasks) => {
      const index = this.findTaskIndex(task.id, this.incompletedTasks);
      console.log(tasks[index], "index of task to be completed");
      
      if (index !== -1) {
        tasks[index].completed = true;
        this.completedTasks.update((completedTasks) => [...completedTasks, tasks[index]]);
        tasks.splice(index, 1);
        this.saveTasks();
      }
      return tasks;
    });
  }
  
  inCompleteTask(task: Task) {
    this.completedTasks.update((tasks) => {
      const index = this.findTaskIndex(task.id,this.completedTasks);
      if (index !== -1) {
        tasks[index].completed = false;
        this.incompletedTasks.update((incompletedTasks) => [...incompletedTasks, tasks[index]]);
        tasks.splice(index, 1);
        this.saveTasks();
      }
      return tasks;
    });
  }

  constructor() {
    this.loadTasks()
  }
  private findTaskIndex(id: number, obj: WritableSignal<Task[]>): number {
    return obj().findIndex((task) => task.id === id);
  }

  addTask(task: Task) {
    return new Promise((resolve) => {
      this.incompletedTasks.update((tasks) => [...tasks, task]);
      this.saveTasks();
      resolve(true);
    });
  }
  private saveTasks() {
    const tasks = [...this.incompletedTasks(), ...this.completedTasks()];
    console.log(tasks,"saved tasks");
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      const parsedTasks: Task[] = JSON.parse(tasks);
      this.incompletedTasks.update((tasks) => [...tasks, ...parsedTasks.filter((task) => !task.completed)]);
      this.completedTasks.update((tasks) => [...tasks, ...parsedTasks.filter((task) => task.completed)]);
    }
  }
}
