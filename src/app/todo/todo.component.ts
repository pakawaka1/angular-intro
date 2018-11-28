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
>>>>>>> 21dae4f6e36fb666ee1546abc6375095b6204ca1

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
>>>>>>> 21dae4f6e36fb666ee1546abc6375095b6204ca1

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
>>>>>>> 21dae4f6e36fb666ee1546abc6375095b6204ca1
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

>>>>>>> 21dae4f6e36fb666ee1546abc6375095b6204ca1
}
