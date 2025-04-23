import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDynamicComponent } from './create-dynamic.component';

describe('CreateDynamicComponent', () => {
  let component: CreateDynamicComponent;
  let fixture: ComponentFixture<CreateDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
