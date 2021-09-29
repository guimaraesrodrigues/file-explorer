import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

import apiMock from '../../mocks/api'
import { TreeNode } from '../../models/tree-node.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {}

  public getDirectoryTree(): Observable<TreeNode> {
    return from(apiMock.getDirectoryTree());
  }
}
