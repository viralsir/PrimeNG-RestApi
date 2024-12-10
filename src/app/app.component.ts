import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimeNG-RestApi';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Entry',
        icon: 'pi pi-home',
        routerLink:'topicentry'
      },
      {
        label: 'View',
        icon: 'pi pi-star',
        routerLink:'topicview'
      },
      {
        label: 'Curd View',
        icon: 'pi pi-star',
        routerLink:'topiccrudview'
      },
      {
        label: 'Topic',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Entry',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'View',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },

          {
            separator: true
          },

        ]
      },

    ];
  }


}
