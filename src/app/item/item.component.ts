import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask, deleteTask, saveTask } from '../reducers/task';
import { ItemService } from '../shared/services/ls.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public tasks: string[] = [];
  public validInput = true;
  public taskControl: FormControl;

  constructor(private lsService: ItemService, private store: Store) {}

  ngOnInit(): void {
    this.taskControl = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.tasks = this.lsService.getItem();
  }

  public addTask() {
    if (this.taskControl.invalid) {
      return;
    }
    this.tasks.push(this.taskControl.value);
    this.taskControl.setValue('');
    this.taskControl.reset();
    this.lsService.setItem(this.tasks);
    this.store.dispatch(addTask());
    console.log(this.tasks);
  }

  public deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.lsService.deleteItem(index);
    this.store.dispatch(deleteTask());
  }

  public saveTask(editTask: string, index: number) {
    this.tasks.splice(index, 1, editTask);
    this.lsService.editItem(editTask, index);
    this.store.dispatch(saveTask());
  }
}
