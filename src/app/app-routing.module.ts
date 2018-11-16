import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { TodoComponent } from '../app/todo/todo.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'todo', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
