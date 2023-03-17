import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptTaskListComponent } from './cpt-task-list.component';

describe('CptTaskListComponent', () => {
  let component: CptTaskListComponent;
  let fixture: ComponentFixture<CptTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
