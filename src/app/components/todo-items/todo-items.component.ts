import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemsComponent implements OnInit {

  todos$: Observable<Array<TodoItem>>;

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.refreshTodos();
    }
  }

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.todoService.getAll();
  }

  markAllAsCompleted() {
    this.todoService.markAllAsCompleted();
  }

  switchCompletedStatus(todoId: string) {
    this.todoService.switchCompletedStatus(todoId);
  }

  remove(todoId: string) {
    this.todoService.remove(todoId);
  }

  onFilterCompletedStatusChanged(status: Boolean | null) {
    this.todoService.filterStatus(status);
  }

  onRemoveCompletedStatusFilterChange() {
    this.todoService.removeFilteringOnStatus();
  }

  async startEditing(todo) {
    this.todoService.refresh();
    todo.editing = true;
    setTimeout(_ => document.getElementById('todo-input').focus(), 0);
  }

  refreshTodos() {
    this.todoService.refresh();
  }

  update(todo: TodoItem, todoContent: String) {
    this.todoService.update(todo.id, todoContent);
    todo.editing = false;
  }
}
