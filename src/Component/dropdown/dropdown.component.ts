import {Component, inject} from '@angular/core';
import {TopicService} from '../../Service/topic.service';
import {DropdownFilterOptions, DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {Topic} from '../../Model/topic';
import {ButtonDirective} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    ButtonDirective,
    InputTextModule,
    CommonModule,


  ],
  animations:[],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  topicservice:TopicService=inject(TopicService);

  topicNameList:string[]=[];
  selectedTopic:string ="";
  filterValue: string | undefined = '';

  constructor() {
   this.topicservice.getAllTopics();
  }

  resetFunction(options: DropdownFilterOptions) {
    // @ts-ignore
    options.reset();
    this.filterValue = '';
  }


  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
    // @ts-ignore
    options.filter(event);
  }

}
