import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewProductComponent } from './newproduct.component';

describe('NewproductComponent', () => {
  let component: MyNewProductComponent;
  let fixture: ComponentFixture<MyNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
