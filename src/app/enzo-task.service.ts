import { Injectable } from '@angular/core';

@Injectable()
export class EnzoTaskService {
  constructor() {}

  private taskList: String[] = [];

  count() {
    return this.taskList.length;
  }

  add(task: String) {
    this.taskList.push(task);
  }

  remove(indice) {
    this.taskList.splice(indice, 1);
  }

  list() {
    return this.taskList;
  }
}
