import { Component, OnInit } from '@angular/core';
import { EnzoTaskService } from '../enzo-task.service';

@Component({
  selector: 'app-enzo-task',
  templateUrl: './enzo-task.component.html',
  styleUrls: ['./enzo-task.component.css'],
})
export class EnzoTaskComponent implements OnInit {
  task = '';
  constructor(private taskService: EnzoTaskService) {}

  ngOnInit() {}

  cadastrar() {
    if (this.task.trim() === '') {
      return alert('Os campos devem estar preechidos');
    }
    this.taskService.add(this.task);
  }

  listar() {
    return this.taskService.list();
  }

  excluir(index) {
    this.taskService.remove(index);
  }
}
