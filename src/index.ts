import { Document } from "./document";
import { RootNode } from "./root";
import { FrameNode } from "./frame";
import { TextNode } from "./text";

const document = new Document("My document");
document.root = new RootNode([
  new FrameNode({ width: 400, height: 800 }, [
    new FrameNode({ x: 0, y: 50, width: 200, height: 200 }),
    new FrameNode({ width: 200, height: 200 })
  ]),
  new TextNode("hello world")
]);

console.log(document.root.toJS());
