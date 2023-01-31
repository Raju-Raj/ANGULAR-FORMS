import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspracComponent } from './formsprac.component';

describe('FormspracComponent', () => {
  let component: FormspracComponent;
  let fixture: ComponentFixture<FormspracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormspracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormspracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
