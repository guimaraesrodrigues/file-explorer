import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TreeNode } from 'src/app/shared/models/tree-node.model';
import { NodeService } from 'src/app/shared/services/node/node.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private subscriptionDestroyer: Subject<any> = new Subject();

  public rootNode: TreeNode;

  constructor(
    private nodeService: NodeService,
    private snackBar: MatSnackBar,
  ) { }

  /**
   * Angular life-cycle. Get directory tree from API and init listener
   *
   * @memberof SidebarComponent
   */
  public ngOnInit(): void {
    this.getDirectory();
    this.listenToDeleteEvent();
  }

  /**
   * Angular life-cycle. Notify subscribers to stop event listening
   *
   * @memberof SidebarComponent
   */
  public ngOnDestroy(): void {
    this.subscriptionDestroyer.next();
    this.subscriptionDestroyer.complete();
  }

  /**
   * Retrieve directory tree and initialize rootNode
   *
   * @private
   * @memberof SidebarComponent
   */
  private getDirectory(): void {
    this.nodeService.getDirectoryTree()
        .pipe(takeUntil(this.subscriptionDestroyer))
        .subscribe(
          (data: TreeNode) => {
            this.rootNode = data;
            this.rootNode.isCollapsed = true;
          },
          () => {
            this.showSnackBar('Error listing directory');
          }
        );
  }

  /**
   * Listen to node delete event and calls deleteNode()
   * with id given
   *
   * @private
   * @memberof SidebarComponent
   */
  private listenToDeleteEvent(): void {
    this.nodeService.listenDeleteClicked()
        .pipe(takeUntil(this.subscriptionDestroyer))
        .subscribe(
          (id: string) => {
            this.deleteNode(id);
          }
        )
  }

  /**
   * Request API to delete node
   * Update rootNode with the returned data from API
   *
   * @private
   * @param {string} id
   * @memberof SidebarComponent
   */
  private deleteNode(id: string): void {
    this.nodeService.deleteNode(id)
        .pipe(takeUntil(this.subscriptionDestroyer))
        .subscribe(
          (data: TreeNode) => {
            this.rootNode = data;
            this.rootNode.isCollapsed = true;
            this.showSnackBar('Node deleted!');
          },
          () => {
            this.showSnackBar('Error deleting node');
          }
        )
  }


  /**
   * Display snackbar with the message given
   *
   * @private
   * @param {string} msg
   * @memberof SidebarComponent
   */
  private showSnackBar(msg: string): void {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}
