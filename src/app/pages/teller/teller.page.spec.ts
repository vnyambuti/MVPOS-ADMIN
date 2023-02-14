import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TellerPage } from './teller.page';

describe('TellerPage', () => {
  let component: TellerPage;
  let fixture: ComponentFixture<TellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
