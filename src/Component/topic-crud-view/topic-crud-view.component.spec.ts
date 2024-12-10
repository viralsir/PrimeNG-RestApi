import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCrudViewComponent } from './topic-crud-view.component';

describe('TopicCrudViewComponent', () => {
  let component: TopicCrudViewComponent;
  let fixture: ComponentFixture<TopicCrudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicCrudViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicCrudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
