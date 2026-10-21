import { Component, EventEmitter, Input, Output } from '@angular/core';
interface TaskType {
  id: String;
  userId: String;
  title: String;
  dueDate: String;
  summary: String;
}
@Component({
  selector: 'app-task',
  imports: [],
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