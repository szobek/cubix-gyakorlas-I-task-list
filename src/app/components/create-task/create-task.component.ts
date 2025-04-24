import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'cgyi-create-task',
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  taskService=inject(TaskService);
  router=inject(Router);
  task = {
    name: '',
    description: '',
  }
taskSave(){
  const task:Task={
    name: this.task.name,
    description: this.task.description,
    completed: false,
    id: this.taskService.tasks().length + 1,
  }
  console.log("this.task:",this.task);
  
  this.taskService.tasks.update((tasks) => [...tasks, task]);
  console.log(this.taskService.tasks());
  // return
  
  this.task.name = '';
  this.task.description = '';
  
  this.router.navigate(['/home']);
}
}
