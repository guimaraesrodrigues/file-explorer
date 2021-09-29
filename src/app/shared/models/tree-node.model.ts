interface TreeNodeInterface {
  id?: string;
  type?: "project" | "folder" | "file";
  name?: string;
  children?: TreeNode[];
}

export class TreeNode implements TreeNodeInterface {
  public id?: string;
  public type?: "project" | "folder" | "file";
  public name?: string;
  public children?: TreeNode[];

  constructor({
    id,
    type,
    name,
    children
  }: TreeNodeInterface) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.children = children;
  }
}
