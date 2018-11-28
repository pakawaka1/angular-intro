import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo';
import { TODOS } from '../mocks/mock-todo';
import { TodoInterface } from '../interfaces/todo-interface';
import { triggerAsyncId } from 'async_hooks';
=======

import { Todo } from '../models/todo';
import { TodoInterface } from '../interfaces/todo-interface';
import { TODOS } from '../mocks/mock-todos';
>>>>>>> c511117a3cbcf83ec170ba6ae4cc8cf5069a23b6

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
<<<<<<< HEAD
  todos: TodoInterface[] = TODOS;
  newTodo: TodoInterface[] = new Todo();
  constructor() {}
=======

  todos: TodoInterface[] = TODOS;
  newTodo: TodoInterface = new Todo();

  constructor() { }
>>>>>>> c511117a3cbcf83ec170ba6ae4cc8cf5069a23b6

  addTodo() {
    const lastIndex: number = this.todos.length - 1;
    const last: TodoInterface = this.todos[lastIndex];
    this.newTodo.id = last.id + 1;
<<<<<<< HEAD
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
=======
    if (this.newTodo.name.trim().length >= 1) {
      this.todos.push(this.newTodo);
      this.newTodo = new Todo();
    }
>>>>>>> c511117a3cbcf83ec170ba6ae4cc8cf5069a23b6
  }

  toggleCompleteTodo(todo: TodoInterface) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleDeleteTodo(todo: TodoInterface) {
<<<<<<< HEAD
    todo.isDeleted = !todo.isDeleteed;
  }

  renderIsCompletedText(todo: TodoInterface) {
    return todo.isCompleted ? 'Incomplete' : 'Complete';

    renderTags(tags):String {}
    {
      return tags.join(', ');
    }
  }
=======
    todo.isDeleted = !todo.isDeleted;
  }

  deleteTodo(todo: TodoInterface) {
    const remove: number = this.todos.indexOf(todo);
    if (remove !== -1) {
      this.todos.splice(remove, 1);
    }
  }

  renderIsCompletedText(todo: TodoInterface) {
    return todo.isCompleted ? 'Uncomplete' : 'Complete';
  }

  ngOnInit() {
  }

>>>>>>> c511117a3cbcf83ec170ba6ae4cc8cf5069a23b6
}
