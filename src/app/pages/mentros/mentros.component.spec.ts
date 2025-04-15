import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentrosComponent } from './mentros.component';

describe('MentrosComponent', () => {
  let component: MentrosComponent;
  let fixture: ComponentFixture<MentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
