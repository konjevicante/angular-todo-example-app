import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<TodoItem> = [
    {
      id: 'fa0da13a-0acb-4925-94e3-97abbbd6a8b4',
      content: 'Bootstrap new angular project',
      completed: true,
      editing: false,
      visible: true,
    },
    {
      id: 'd1f7d689-9442-43cd-84d3-daa8174bec22',
      content: 'Add styling and markup',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: 'cfc8f773-a867-4d05-9ca8-3aa411afd7e2',
      content: 'Create components/split markup accordingly',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: '3399dbaf-a848-4363-b07f-9314562d6afa',
      content: 'Create TodoService and add crud methods',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: 'c122a964-9990-43fe-8704-656b33e83d42',
      content: 'Finish create functionality',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: '44df2dad-e3df-4703-b0f3-ac707b722236',
      content: 'Finish listing functionality',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: 'f3cf4c6b-22a0-4472-b4a3-7ab0935cf5c4',
      content: 'Implement Mark as completed and Remove',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: '4ad6fc5f-8744-42d2-b473-2e889d74f023',
      content: 'Finish filtering functionality',
      completed: true,
      editing: false,
      visible: true
    },
    {
      id: '7fb13a68-9898-4ac5-a2c2-d53a94992cf4',
      content: 'Add edit/update',
      completed: true,
      editing: false,
      visible: true
    }
  ];

  private _todos: BehaviorSubject<TodoItem[]>;

  constructor() {
    this._todos = <BehaviorSubject<TodoItem[]>>new BehaviorSubject(this.todos);
  }

  getAll() {
    return this._todos.asObservable();
  }

  add(todoItem: TodoItem) {
    this.todos.push(todoItem);
    this.pushVisible();
  }

  update(todoId, todoContent) {
    this.todos.forEach((t, i) => {
      if (t.id === todoId) {
        this.todos[i].content = todoContent;
      }
    });
    this.pushVisible();
  }

  switchCompletedStatus(todoId: string) {
    this.todos.forEach((t, i) => {
      if (t.id === todoId) {
        this.todos[i].completed = !this.todos[i].completed;
      }
    });
    this.pushVisible();
  }

  markAllAsCompleted() {
    this.todos.forEach((todo: TodoItem) => {
      todo.completed = true;
    });
    this.pushVisible();
  }

  remove(todoId: string) {
    this.todos.forEach((todoItem: TodoItem, i) => {
      if (todoItem.id === todoId) {
        this.todos.splice(i, 1);
      }
    });
    this.pushVisible();
  }

  removeCompleted() {
    const todos = this.todos.filter(function (t) {
      return t.completed === false;
    });
    this.todos = todos;
    this.pushVisible();
  }

  filterCompleted(status: Boolean) {
    this.todos.forEach((todo: TodoItem) => {
      todo.visible = todo.completed === status;
    });
    this.pushVisible();
  }

  removeFilteringOnStatus() {
    this.todos.forEach((todo: TodoItem) => {
      todo.visible = true;
    });
    this.pushVisible();
  }

  refresh() {
    this.todos.forEach(t => t.editing = false);
    this.pushVisible();
  }

  pushVisible() {
    const todos = this.todos.filter(function (todoItem: TodoItem) {
      return todoItem.visible === true;
    });
    this._todos.next(todos);
  }
}
