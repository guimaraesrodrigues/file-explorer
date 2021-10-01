import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NodeComponent } from './sidebar/node/node.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    NodeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class MainModule { }
