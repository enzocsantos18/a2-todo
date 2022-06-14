import { Component, OnInit } from '@angular/core';
import { EnzoTaskService } from '../enzo-task.service';

@Component({
  selector: 'app-enzo-home',
  templateUrl: './enzo-home.component.html',
  styleUrls: ['./enzo-home.component.css'],
})
export class EnzoHomeComponent implements OnInit {
  constructor(private taskService: EnzoTaskService) {}

  ngOnInit() {}

  count() {
    return this.taskService.count();
  }
}
