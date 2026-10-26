import { Component, EventEmitter, Output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output()  add = new EventEmitter<NewTaskData>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    });
}
}
