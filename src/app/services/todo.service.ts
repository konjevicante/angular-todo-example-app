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
      editing: false
    },
    {
      id: 'd1f7d689-9442-43cd-84d3-daa8174bec22',
      content: 'Add styling and markup',
      completed: true,
      editing: false
    },
    {
      id: 'cfc8f773-a867-4d05-9ca8-3aa411afd7e2',
      content: 'Create components/split markup accordingly',
      completed: true,
      editing: false
    },
    {
      id: '3399dbaf-a848-4363-b07f-9314562d6afa',
      content: 'Create TodoService and add crud methods',
      completed: true,
      editing: false
    },
    {
      id: 'c122a964-9990-43fe-8704-656b33e83d42',
      content: 'Finish create functionality',
      completed: true,
      editing: false
    },
    {
      id: '44df2dad-e3df-4703-b0f3-ac707b722236',
      content: 'Finish listing functionality',
      completed: true,
      editing: false
    },
    {
      id: 'f3cf4c6b-22a0-4472-b4a3-7ab0935cf5c4',
      content: 'Implement Mark as completed and Remove',
      completed: true,
      editing: false
    },
    {
      id: '4ad6fc5f-8744-42d2-b473-2e889d74f023',
      content: 'Finish filtering functionality',
      completed: true,
      editing: false
    },
    {
      id: '7fb13a68-9898-4ac5-a2c2-d53a94992cf4',
      content: 'Add edit/update',
      completed: true,
      editing: false
    },
    {
      id: '989b72ea-8c28-4f64-a798-01d366202076',
      content: 'Cleanup code style',
      completed: true,
      editing: false
    },
    {
      id: 'f06f458f-ac0c-4feb-8182-92b8c18107a6',
      content: 'Upload to git',
      completed: true, editing: false
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
    this._todos.next(this.todos);
  }

  update(todoId, todoContent) {
    this.todos.forEach((t, i) => {
      if (t.id === todoId) {
        this.todos[i].content = todoContent;
      }
    });
    this._todos.next(this.todos);
  }

  switchCompletedStatus(todoId: string) {
    this.todos.forEach((t, i) => {
      if (t.id === todoId) {
        this.todos[i].completed = !this.todos[i].completed;
      }
    });
    this._todos.next(this.todos);
  }

  markAllAsCompleted() {
    this.todos.forEach((t, i) => {
      this.todos[i].completed = true;
    });
  }

  remove(todoId: string) {
    this.todos.forEach((t, i) => {
      if (t.id === todoId) {
        this.todos.splice(i, 1);
      }
    });
    this._todos.next(this.todos);
  }

  removeCompleted() {
    const todos = this.todos.filter(function (t) {
      return t.completed === false;
    });

    this.todos = todos;
    this._todos.next(todos);
  }

  filterStatus(status: Boolean) {
    const todos = this.todos.filter(function (t) {
      return t.completed === status;
    });

    this._todos.next(todos);
  }

  removeFilteringOnStatus() {
    this.refresh();
  }

  refresh() {
    this.todos.forEach(t => t.editing = false);
    this._todos.next(this.todos);
  }
}
