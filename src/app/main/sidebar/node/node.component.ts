import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/enums/icons.enums';
import { TreeNode } from 'src/app/shared/models/tree-node.model';
import { NodeService } from 'src/app/shared/services/node/node.service';
import { IconService } from 'src/app/shared/services/icon/icon.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {

  @Input() public parentNode: TreeNode;
  @Input() public level: number;

  constructor(
    private iconService: IconService,
    private nodeService: NodeService
  ) { }

  /**
   * Set collapsed value
   *
   * @param {TreeNode} node
   * @memberof NodeComponent
   */
  public setCollapsed(node: TreeNode): void {
    node.isCollapsed = !node.isCollapsed;
  }

  /**
   * Identify file extension and define icon name
   *
   * @param {string} fileName
   * @returns {string}
   * @memberof NodeComponent
   */
  public getIconName(fileName: string): string {
    const extension = Icons[fileName.split('.').pop()];

    return extension ? extension : Icons.default;
  }

  /**
   * Notify delete subject with the given id
   *
   * @param {string} id
   * @memberof NodeComponent
   */
  public deleteNode(id: string): void {
    this.nodeService.notifyDeleted(id);
  }
}
