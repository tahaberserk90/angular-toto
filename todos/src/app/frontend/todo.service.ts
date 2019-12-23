import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TodoService {

  private url:string="http://localhost:2403/todos";
  subjectTodos:Subject<Todo[]>=new Subject<Todo[]>();
  subjectTodos$=this.subjectTodos.asObservable();

  constructor(private http:HttpClient) { }

  getTodos():any{
    this.http.get(this.url).subscribe((r:any)=>{
      let data=r;
      this.subjectTodos.next(data);
    });
    return this.subjectTodos$;
  }

  getTodo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  saveTodo(todo:Todo){
    return this.http.post(this.url,todo);
  }
  delete(todo:Todo){
    return this.http.delete(this.url+'/'+todo.id);
  }
}
