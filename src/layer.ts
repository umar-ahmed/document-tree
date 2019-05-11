import { TreeNode } from "./tree";

interface Size {
  width?: number;
  height?: number;
}

interface Position {
  x?: number;
  y?: number;
}

interface Rotation {
  angle?: number;
}

export interface LayerProperties extends Size, Position, Rotation {}

export class LayerNode extends TreeNode {
  constructor(params?: LayerProperties, children?: LayerNode[]) {
    super(children);
    const layerParams = Object.assign(
      {},
      { width: 0, height: 0, x: 0, y: 0 },
      params
    );
    for (const key in layerParams) {
      this[key] = layerParams[key];
    }
  }
}
