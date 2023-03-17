import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptNoTaskComponent } from './cpt-no-task.component';

describe('CptNoTaskComponent', () => {
  let component: CptNoTaskComponent;
  let fixture: ComponentFixture<CptNoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptNoTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptNoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
