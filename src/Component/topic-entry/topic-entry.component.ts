import {Component, inject} from '@angular/core';
import {Topic} from '../../Model/topic';
import {TopicService} from '../../Service/topic.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-topic-entry',
  imports: [
    FormsModule
  ],
  templateUrl: './topic-entry.component.html',
  standalone: true,
  styleUrl: './topic-entry.component.css'
})
export class TopicEntryComponent
{
     topic:Topic = new Topic();
     topicservice=inject(TopicService);



     saveTopic(){
         this.topicservice.saveTopic(this.topic);
         this.topic=new Topic();
         alert("record has been saved.");

     }

}
