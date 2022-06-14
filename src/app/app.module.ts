import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EnzoHomeComponent } from './enzo-home/enzo-home.component';
import { EnzoTaskComponent } from './enzo-task/enzo-task.component';
import { EnzoTaskService } from './enzo-task.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: EnzoHomeComponent },
      { path: 'tarefas', component: EnzoTaskComponent },
    ]),
  ],
  declarations: [AppComponent, EnzoHomeComponent, EnzoTaskComponent],
  providers: [EnzoTaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
