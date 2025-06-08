import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviaryDetailViewComponent } from './aviary-detail-view.component';

describe('DetailViewComponent', () => {
  let component: AviaryDetailViewComponent;
  let fixture: ComponentFixture<AviaryDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AviaryDetailViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviaryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
