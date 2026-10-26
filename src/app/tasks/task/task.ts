import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../shared/card/card';
import {DatePipe} from '@angular/common';

interface TaskType {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}
@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required : true}) task!:TaskType;
  @Output() complete = new EventEmitter<String>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}