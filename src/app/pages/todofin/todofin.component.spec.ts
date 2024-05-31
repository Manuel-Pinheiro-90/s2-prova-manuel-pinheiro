import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodofinComponent } from './todofin.component';

describe('TodofinComponent', () => {
  let component: TodofinComponent;
  let fixture: ComponentFixture<TodofinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodofinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodofinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
