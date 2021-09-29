import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TreeNode } from 'src/app/shared/models/tree-node.model';
import { FileService } from 'src/app/shared/services/file/file.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private subscriptionDestroyer: Subject<any> = new Subject();

  public rootNode: TreeNode;

  constructor(
    private fileService: FileService
  ) { }

  public ngOnInit(): void {
    this.getDirectory();
  }

  public ngOnDestroy(): void {
    this.subscriptionDestroyer.next();
    this.subscriptionDestroyer.complete();
  }

  private getDirectory(): void {
    this.fileService.getDirectoryTree()
        .pipe(takeUntil(this.subscriptionDestroyer))
        .subscribe(
          (data: TreeNode) => {
            this.rootNode = data;
          },
          (errorMsg: string) => {

          }
        );
  }
}
