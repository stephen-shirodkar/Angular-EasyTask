import { Component,input,Input } from '@angular/core';
import {  Task } from './task/task';
import { required } from '@angular/forms/signals';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required : true}) userId !: string;
  @Input({required : true}) name !: string;
   isAddingTask = false;
  tasks = [
    { id: 't1', 
      userId: 'u1',
      title: 'Master Angular', 
      dueDate: '2026-12-28', 
      summary: 'learn angular and become a pro'
    },
    { id: 't2', 
      userId: 'u2',
      title: 'Create order service', 
      dueDate: '2026-12-01', 
      summary: 'orderrrrr'
    },
    { id: 't3', 
      userId: 'u3',
      title: 'Play GTA 6', 
      dueDate: '2026-11-19', 
      summary: 'its that time of the year'
    },
     { id: 't4', 
      userId: 'u3',
      title: 'Play Fc27', 
      dueDate: '2026-11-19', 
      summary: 'Help Madrid win atleast somewhere'
    },
     { id: 't5', 
      userId: 'u3',
      title: 'Play last of us 2', 
      dueDate: '2026-11-19', 
      summary: ' where joel at?'
    }

  ]
  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
  onCompleteTask(id: String) {
    this.tasks = this.tasks.filter((task)=>task.id !==id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
