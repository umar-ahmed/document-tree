import { TreeNode } from "./tree";
import { RootNode } from "./root";

interface LookUpTable {
  [key: string]: TreeNode;
}

export class Document {
  root: RootNode;
  idToNode: LookUpTable;

  constructor(public name: string) {}
}
