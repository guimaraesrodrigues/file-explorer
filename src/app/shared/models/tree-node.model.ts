interface TreeNodeInterface {
  id?: string;
  type?: "project" | "folder" | "file";
  name?: string;
  children?: TreeNode[];
  isCollapsed?: boolean;
}

export class TreeNode implements TreeNodeInterface {
  public id?: string;
  public type?: "project" | "folder" | "file";
  public name?: string;
  public children?: TreeNode[];
  public isCollapsed?: boolean;

  constructor({
    id,
    type,
    name,
    children,
    isCollapsed
  }: TreeNodeInterface) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.children = children;
    this.isCollapsed = isCollapsed;
  }
}
