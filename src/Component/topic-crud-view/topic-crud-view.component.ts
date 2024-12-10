import {Component, inject, OnInit} from '@angular/core';
import {TopicService} from '../../Service/topic.service';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {Topic} from '../../Model/topic';
import {MessageService} from 'primeng/api';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonDirective, ButtonModule} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-topic-crud-view',
  standalone: true,
  imports: [
    TableModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    Ripple,
    CommonModule
  ],
  templateUrl: './topic-crud-view.component.html',
  styleUrl: './topic-crud-view.component.css',
  providers: [MessageService]
})
export class TopicCrudViewComponent implements OnInit{

  topicservice=inject(TopicService);

  topics!: Topic[];

  //statuses!: SelectItem[];

  topic:Topic = new Topic();

  clonedProducts: { [s: string]: Topic } = {};

  constructor(private messageService: MessageService) {
      this.topics=this.topicservice.getAllTopics();
  }

  ngOnInit() {
    this.topics=this.topicservice.getAllTopics();
  }

  //   this.statuses = [
  //     { label: 'In Stock', value: 'INSTOCK' },
  //     { label: 'Low Stock', value: 'LOWSTOCK' },
  //     { label: 'Out of Stock', value: 'OUTOFSTOCK' }
  //   ];
  // }

  onRowEditInit(topic: Topic) {
    this.clonedProducts[topic.id as string] = { ...topic };
    this.topic=topic;
  }

  onRowEditSave(topic: Topic) {
      this.topicservice.updateTopic(topic);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'topic is updated' });

  }

  onRowEditCancel(topic: Topic, index: number) {
    //this.products[index] = this.clonedProducts[product.id as string];
   // delete this.clonedProducts[product.id as string];
  }





}
