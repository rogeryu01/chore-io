import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreListComponent } from './chore-list.component';

describe('ChoreListComponent', () => {
  let component: ChoreListComponent;
  let fixture: ComponentFixture<ChoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
