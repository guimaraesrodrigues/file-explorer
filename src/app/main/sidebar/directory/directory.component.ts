import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/enums/icons.enums';
import { TreeNode } from 'src/app/shared/models/tree-node.model';
import { IconService } from 'src/app/shared/services/icon/icon.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  @Input() public children: TreeNode[];
  @Input() public level: number;

  public collapsed: boolean = false;

  constructor(
    private iconService: IconService
  ) { }

  ngOnInit(): void {

  }

  public setCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  public getExtension(fileName: string): string {
    const extension = Icons[fileName.split('.').pop()];

    return extension ? extension : Icons.default;
  }

}
