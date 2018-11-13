import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
})
export class CreateTodoItemComponent {

  constructor(private todoService: TodoService) {
  }

  create(todoContent: string) {
    this.todoService.add({
      id: this.uuidv4(),
      content: todoContent,
      completed: false,
      editing: false,
      visible: true
    });
  }

  private uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
