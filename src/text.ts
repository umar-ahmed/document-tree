import { LayerNode, LayerProperties } from "./layer";

interface Font {
  family?: string;
  weight?: number;
}

enum Alignment {
  LEFT,
  CENTER,
  RIGHT,
  JUSTIFY
}

interface TextLayout {
  alignment?: Alignment;
  lineHeight?: number;
}

interface TextProperties extends Font, TextLayout {}

export class TextNode extends LayerNode implements TextProperties {
  text: string;
  family: string = "sans-serif";
  weight: number = 400;
  alignment: Alignment = Alignment.LEFT;
  lineHeight: number = 1.5;

  constructor(text: string, params?: LayerProperties) {
    super(params);
    delete this.children;
    this.text = text;
  }
}
