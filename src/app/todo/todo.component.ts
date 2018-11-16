import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo';
import { TODOS } from '../mocks/mock-todo';
import { TodoInterface } from '../interfaces/todo-interface';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TodoInterface[] = TODOS;
  newTodo: TodoInterface[] = new Todo();
  constructor() {}

  addTodo() {
    const lastIndex: number = this.todos.length - 1;
    const last: TodoInterface = this.todos[lastIndex];
    this.newTodo.id = last.id + 1;
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleCompleteTodo(todo: TodoInterface) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleDeleteTodo(todo: TodoInterface) {
    todo.isDeleted = !todo.isDeleteed;
  }

  renderIsCompletedText(todo: TodoInterface) {
    return todo.isCompleted ? 'Incomplete' : 'Complete';

    renderTags(tags):String {}
    {
      return tags.join(', ');
    }
  }
}
