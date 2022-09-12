import { Injectable } from '@angular/core';
import { LS_KEY } from '../constants/ls.const';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public lsKey: string = LS_KEY;

  constructor() {}

  setItem(tasks: string[]) {
    localStorage.setItem(this.lsKey, JSON.stringify(tasks));
  }

  getItem() {
    return JSON.parse(localStorage.getItem(this.lsKey));
  }

  deleteItem(index: number) {
    let lsGetTask = JSON.parse(localStorage.getItem(this.lsKey));
    lsGetTask.splice(index, 1);
    localStorage.setItem(this.lsKey, JSON.stringify(lsGetTask));
  }

  editItem(editTask: string, index: number) {
    let lsGetTask = JSON.parse(localStorage.getItem(this.lsKey));
    lsGetTask.splice(index, 1, editTask);
    localStorage.setItem(this.lsKey, JSON.stringify(lsGetTask));
  }
}
