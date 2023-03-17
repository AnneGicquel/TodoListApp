import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptHistoryComponent } from './cpt-history.component';

describe('CptHistoryComponent', () => {
  let component: CptHistoryComponent;
  let fixture: ComponentFixture<CptHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
