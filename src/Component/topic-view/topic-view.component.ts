import {Component, inject} from '@angular/core';
import {TopicService} from '../../Service/topic.service';
import {Topic} from '../../Model/topic';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-topic-view',
  imports: [
    TableModule,
    Button
  ],
  templateUrl: './topic-view.component.html',
  standalone: true,
  styleUrl: './topic-view.component.css'
})
export class TopicViewComponent
{
   topicservice=inject(TopicService);






}
