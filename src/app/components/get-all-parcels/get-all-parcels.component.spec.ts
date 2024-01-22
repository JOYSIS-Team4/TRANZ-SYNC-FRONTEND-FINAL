import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllParcelsComponent } from './get-all-parcels.component';

describe('GetAllParcelsComponent', () => {
  let component: GetAllParcelsComponent;
  let fixture: ComponentFixture<GetAllParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllParcelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
