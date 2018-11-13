import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsFooterComponent } from './todo-items-footer.component';

describe('TodoItemsFooterComponent', () => {
  let component: TodoItemsFooterComponent;
  let fixture: ComponentFixture<TodoItemsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemsFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
