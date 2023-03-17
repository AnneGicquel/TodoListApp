import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptNewTaskComponent } from './cpt-new-task.component';

describe('CptNewTaskComponent', () => {
  let component: CptNewTaskComponent;
  let fixture: ComponentFixture<CptNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptNewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
