import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/enums/icons.enums';
import { TreeNode } from 'src/app/shared/models/tree-node.model';
import { FileService } from 'src/app/shared/services/file/file.service';
import { IconService } from 'src/app/shared/services/icon/icon.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() public parentNode: TreeNode;
  @Input() public level: number;

  public idCollapsed: string = '';

  constructor(
    private iconService: IconService,
    private fileService: FileService
  ) { }

  ngOnInit(): void {
  }

  public setCollapsedId(id: string): void {
    // console.log('colappsed ', this.collapsed)
    console.log('parentNode ', this.parentNode.isCollapsed)

    if (id === this.idCollapsed) {
      this.idCollapsed = '';
    } else {
      this.idCollapsed = id;
    }
  }

  public getIconName(fileName: string): string {
    const extension = Icons[fileName.split('.').pop()];

    return extension ? extension : Icons.default;
  }

  public deleteNode(id: string): void {
    this.fileService.notifyDeleted(id);
  }

  public show(): boolean {
    return this.parentNode?.isCollapsed;
  }
}
