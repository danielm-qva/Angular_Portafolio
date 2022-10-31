import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkkComponent } from './workk.component';

describe('WorkkComponent', () => {
  let component: WorkkComponent;
  let fixture: ComponentFixture<WorkkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
