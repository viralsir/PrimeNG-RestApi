import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicEntryComponent } from './topic-entry.component';

describe('TopicEntryComponent', () => {
  let component: TopicEntryComponent;
  let fixture: ComponentFixture<TopicEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
