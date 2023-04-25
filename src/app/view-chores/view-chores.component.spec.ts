import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChoresComponent } from './view-chores.component';

describe('ViewChoresComponent', () => {
  let component: ViewChoresComponent;
  let fixture: ComponentFixture<ViewChoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
