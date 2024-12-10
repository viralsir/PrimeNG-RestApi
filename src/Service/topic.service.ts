import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../Model/topic';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topicList: Array<Topic> = [];

  constructor(private httpclient :HttpClient) {

  }





  getAllTopics(): Topic[] {
     this.httpclient.get<Topic[]>("http://localhost:9090/topics").subscribe(result=>{
      this.topicList=result
    });
     return this.topicList;
  }

  saveTopic(topic:Topic): void {
       this.httpclient.post("http://localhost:9090/topics",topic).subscribe((result:any)=>{
       });
  }

  updateTopic(topic:Topic): void {
    this.httpclient.put("http://localhost:9090/topics",topic).subscribe((result:any)=>{
    });
  }

  // deleteTopic(topic:Topic): void {
  //   this.httpclient.delete("http://localhost:9090/topics",topic).subscribe((result:any)=>{
  //   });
  // }

}
