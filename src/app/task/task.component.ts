import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  public edit = false;

  @Input() task: string = '';

  @Output() delete = new EventEmitter();
  @Output() save = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public editItem() {
    this.edit = true;
  }

  public deleteTask() {
    this.delete.emit();
  }

  public saveTask() {
    this.edit = false;
    this.save.emit(this.task);
  }
}
