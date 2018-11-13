import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-items-footer',
  templateUrl: './todo-items-footer.component.html',
})
export class TodoItemsFooterComponent implements OnInit {

  @Input() todoItemCount: Number;
  @Output() filterCompletedStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeCompletedStatusFilterChanged: EventEmitter<null> = new EventEmitter<null>();

  selectedFilter: String = 'all';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  removeCompleted() {
    this.todoService.removeCompleted();
  }

  filterCompletedStatus(completedStatus: boolean, event) {
    event.preventDefault();
    this.selectedFilter = completedStatus ? 'completed' : 'active';
    this.filterCompletedStatusChanged.emit(completedStatus);
  }

  removeCompletedStatusFilter(event) {
    event.preventDefault();
    this.selectedFilter = 'all';
    this.removeCompletedStatusFilterChanged.emit();
  }
}
