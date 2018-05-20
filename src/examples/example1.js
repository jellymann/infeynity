import { Electron, Positron, Photon, Vertex, OriginVertex } from '../feynman';

const e1 = new Electron();
const e2 = new Electron();
const p1 = new Positron();
const p2 = new Positron();
const ev1 = new Electron();
const pv1 = new Positron();
const gv1 = new Photon();
const gv2 = new Photon();

const v1 = new Vertex(e1, ev1, gv1);
const v2 = new Vertex(ev1, e2, gv2);
const v3 = new Vertex(p1, gv1, pv1);
const v4 = new Vertex(pv1, gv2, p2);

export const inputs = [e1, p1];
export const outputs = [e2, p2];
export const virtuals = [ev1, pv1, gv1, gv2];

export const incomingVertices = inputs.map(p => new OriginVertex(p));
export const outgoingVertices = outputs.map(p => new OriginVertex(p));
export const innerVertices = [v1, v2, v3, v4];

export const originVertices = [...incomingVertices, ...outgoingVertices];

export const allParticles = [...inputs, ...outputs, ...virtuals];
export const allVertices = [...originVertices, ...innerVertices];
