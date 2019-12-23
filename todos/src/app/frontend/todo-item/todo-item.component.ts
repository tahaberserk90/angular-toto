import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo:Todo;

  constructor(private todoService:TodoService,private router:Router) { }

  ngOnInit() {
  }

  edit(todo:Todo){
     this.router.navigate([{outlets:{editOutlet:['edit',todo.id]}}]);
  }
  del(todo:Todo)
{
  this.todoService.delete(todo).subscribe(()=>{this.todoService.getTodos()});
}
}
