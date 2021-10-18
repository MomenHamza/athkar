import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthkarComponent } from './athkar.component';

describe('AthkarComponent', () => {
  let component: AthkarComponent;
  let fixture: ComponentFixture<AthkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthkarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
