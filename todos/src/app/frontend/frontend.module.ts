import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './todo.service';
import { FrontendRoutingModule } from './frontend-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, TodoListComponent, TodoItemComponent, TodoFormComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule
  ],
  providers:[TodoService]
})
export class FrontendModule { }
