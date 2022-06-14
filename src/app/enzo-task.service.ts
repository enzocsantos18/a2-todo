import { Injectable } from '@angular/core';

@Injectable()
export class EnzoTaskService {
  constructor() {
    let data = JSON.parse(localStorage.getItem('tasks'));
    this.taskList = data ? data : [];
  }

  private taskList: String[] = [];

  count() {
    return this.taskList.length;
  }

  add(task: String) {
    this.taskList.push(task);
    this.update();
  }

  remove(indice) {
    this.taskList.splice(indice, 1);
    this.update();
  }

  update() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
  list() {
    return this.taskList;
  }
}
