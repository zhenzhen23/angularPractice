import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadsService } from '../thread/threads.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {

  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) { 
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit(): void {
  }

}
