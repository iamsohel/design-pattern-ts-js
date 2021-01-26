import { BrushTool } from './BrushTool';
import { Canvas } from './Canvas';

const canvas = new Canvas();
canvas.setCurrentTool(new BrushTool());
canvas.MouseDown();
canvas.MouseUp();