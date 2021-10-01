import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeNode } from 'src/app/shared/models/tree-node.model';

import { NodeComponent } from './node.component';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set node.isCollapsed as true', () => {
    let nodeMock = new TreeNode({});

    component.setCollapsed(nodeMock);

    expect(nodeMock.isCollapsed).toBeTrue();
  });

  it('should return icon name for css file extension', () => {
    let nodeMock = new TreeNode({name: 'styles.css'});

    const iconName = component.getIconName(nodeMock.name);

    expect(iconName).toEqual('cssFile');
  });

  it('should call #notifyDeleted when #deleteNode is invoked', () => {
    const spyOnNotifyDeleted = spyOn(component['nodeService'], 'notifyDeleted');

    component.deleteNode('abc');

    expect(spyOnNotifyDeleted).toHaveBeenCalledWith('abc');
  });
});
