import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { TreeNode } from 'src/app/shared/models/tree-node.model';
import { NodeService } from 'src/app/shared/services/node/node.service';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let nodeServiceStub: jasmine.SpyObj<NodeService>;
  let nodeMock = new TreeNode({id: 'abc'});

  beforeEach(async () => {
    nodeServiceStub = jasmine.createSpyObj('NodeService', ['getDirectoryTree', 'listenDeleteClicked']);
    nodeServiceStub.getDirectoryTree.and.returnValue(of());
    nodeServiceStub.listenDeleteClicked.and.returnValue(of());

    await TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
      imports: [
        MatSnackBarModule
      ],
      providers: [
        {
          provide: NodeService,
          useValue: nodeServiceStub
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rootNode when #getDirectory is called', () => {
    nodeServiceStub.getDirectoryTree.and.returnValue(of(nodeMock));

    component['getDirectory']();

    expect(component.rootNode).toEqual(nodeMock);
  });
});
