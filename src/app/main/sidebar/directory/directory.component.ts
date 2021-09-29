import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'src/app/shared/models/tree-node.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  @Input() public children: TreeNode[];
  @Input() public level: number;

  public collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public setCollapsed(): void {
    console.log('oiiii', this.collapsed);
    this.collapsed = !this.collapsed;
  }

}
