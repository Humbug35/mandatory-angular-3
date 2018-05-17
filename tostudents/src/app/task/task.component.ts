import { Input, Component } from '@angular/core';
import { Task } from '../constants';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  constructor() {}
}
