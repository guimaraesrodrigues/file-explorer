import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'src/app/shared/models/tree-node.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  @Input() public children: TreeNode[];

  constructor() { }

  ngOnInit(): void {
  }

}
