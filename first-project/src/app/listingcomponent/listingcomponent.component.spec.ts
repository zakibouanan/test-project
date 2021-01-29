import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingcomponentComponent } from './listingcomponent.component';

describe('ListingcomponentComponent', () => {
  let component: ListingcomponentComponent;
  let fixture: ComponentFixture<ListingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
