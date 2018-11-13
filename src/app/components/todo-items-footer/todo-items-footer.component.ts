import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-items-footer',
  templateUrl: './todo-items-footer.component.html',
})
export class TodoItemsFooterComponent implements OnInit {

  @Input() todoItemCount: Number;
  @Output() filterCompletedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeCompletedFilterChanged: EventEmitter<null> = new EventEmitter<null>();

  selectedFilter: String = 'all';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  removeCompleted() {
    this.todoService.removeCompleted();
  }

  filterCompleted(completed: boolean, event) {
    event.preventDefault();
    this.selectedFilter = completed ? 'completed' : 'active';
    this.filterCompletedChanged.emit(completed);
  }

  removeCompletedFilter(event) {
    event.preventDefault();
    this.selectedFilter = 'all';
    this.removeCompletedFilterChanged.emit();
  }
}
