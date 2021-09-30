import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { from } from 'rxjs';

import apiMock from '../../mocks/api'
import { TreeNode } from '../../models/tree-node.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private delete: Subject<string> = new Subject<string>();

  constructor() {}

  public notifyDeleted(id: string): void {
    this.delete.next(id);
  }

  public listenDeleteClicked(): Observable<string> {
    return this.delete.asObservable();
  }

  public getDirectoryTree(): Observable<TreeNode> {
    return from(apiMock.getDirectoryTree());
  }

  public deleteNode(nodeId: string): Observable<TreeNode> {
    return from(apiMock.deleteById(nodeId));
  }
}
