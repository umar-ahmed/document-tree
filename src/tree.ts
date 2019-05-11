import * as uuidv4 from "uuid/v4";

enum FillType {
  COLOR,
  IMAGE
}

interface Fill {
  type?: FillType;
  value?: string;
}

export class TreeNode {
  id: string;

  constructor(public children: TreeNode[] = []) {
    this.id = uuidv4();
  }

  /**
   * Return a new JavaScript object that represents this.
   */
  toJS() {
    const result: any = Object.assign({}, this);
    result.__class = this.constructor.name;
    if (this.children) {
      result.children = this.children.map(child => child.toJS());
    }
    return result;
  }
}
