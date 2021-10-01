import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { from } from 'rxjs';

import apiMock from '../../mocks/api'
import { TreeNode } from '../../models/tree-node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  private delete: Subject<string> = new Subject<string>();

  constructor() {}

  /**
   * Emit event to delete subject
   *
   * @param {string} id
   * @memberof NodeService
   */
  public notifyDeleted(id: string): void {
    this.delete.next(id);
  }

  /**
   * Return delete subject as an observable
   *
   * @returns {Observable<string>}
   * @memberof NodeService
   */
  public listenDeleteClicked(): Observable<string> {
    return this.delete.asObservable();
  }

  /**
   * Get diretory tree from "API"
   *
   * @returns {Observable<TreeNode>}
   * @memberof NodeService
   */
  public getDirectoryTree(): Observable<TreeNode> {
    return from(apiMock.getDirectoryTree());
  }

  /**
   * Request API to delete a node
   *
   * @param {string} nodeId
   * @returns {Observable<TreeNode>}
   * @memberof NodeService
   */
  public deleteNode(nodeId: string): Observable<TreeNode> {
    return from(apiMock.deleteById(nodeId));
  }
}
