import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSectionComponent } from './pet-section.component';

describe('PetSectionComponent', () => {
  let component: PetSectionComponent;
  let fixture: ComponentFixture<PetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
