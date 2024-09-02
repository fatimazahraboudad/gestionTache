import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheComponentComponent } from './tache-component.component';

describe('TacheComponentComponent', () => {
  let component: TacheComponentComponent;
  let fixture: ComponentFixture<TacheComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacheComponentComponent]
    });
    fixture = TestBed.createComponent(TacheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
