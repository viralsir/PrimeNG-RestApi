import { Routes } from '@angular/router';
import {TopicEntryComponent} from '../Component/topic-entry/topic-entry.component';
import {TopicViewComponent} from '../Component/topic-view/topic-view.component';
import {TopicCrudViewComponent} from '../Component/topic-crud-view/topic-crud-view.component';

export const routes: Routes = [
  {path:"topicentry",component:TopicEntryComponent},
  {path:"topicview",component:TopicViewComponent},
  {path:"topiccrudview",component:TopicCrudViewComponent},
];
