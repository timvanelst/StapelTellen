import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageExampleComponentComponent } from './message-example-component.component';

describe('MessageExampleComponentComponent', () => {
  let component: MessageExampleComponentComponent;
  let fixture: ComponentFixture<MessageExampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageExampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
