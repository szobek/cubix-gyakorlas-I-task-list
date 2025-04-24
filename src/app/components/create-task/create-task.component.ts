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
  const task: Task = {
    id: this.taskService.tasks().length + 1,
    name: this.task.name,
    description: this.task.description,
    completed: false
  }
  this.taskService.addTask(task).then((res)=>{
    if(res){
      this.task.name = '';
      this.task.description = '';
      this.router.navigate(['/home']);
    }
  })
}
}
