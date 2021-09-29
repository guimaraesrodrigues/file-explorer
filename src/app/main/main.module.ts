import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DirectoryComponent } from './sidebar/directory/directory.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class MainModule { }
