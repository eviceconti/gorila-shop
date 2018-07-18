import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickedListComponent } from './ticked-list.component';

describe('TickedListComponent', () => {
  let component: TickedListComponent;
  let fixture: ComponentFixture<TickedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
