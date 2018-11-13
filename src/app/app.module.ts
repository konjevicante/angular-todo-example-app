import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { TodoItemsFooterComponent } from './components/todo-items-footer/todo-items-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoItemComponent,
    TodoItemsComponent,
    TodoItemsFooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
