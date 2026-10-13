import { writeFileSync } from "node:fs";
import * as k from "./iso-kit.mjs";
const plate = { x: -120, y: -72, w: 240, d: 144, r: 8 };
const P = k.fitProjection(k.boxCorners(plate, -18, 50), 600, 380, {
  pad: 24,
  azimuth: 42,
});
const S = k.solidSvg,
  L = k.lineSvg,
  at = (p) => k.iso(p, P);
const body = [];
const sorted = (points) =>
  points.sort((a, b) => k.depthOf([...a, 0], P) - k.depthOf([...b, 0], P));
for (const [x, y] of sorted(k.corners(plate, 20)))
  body.push(S(k.cylinder(x, y, 7, -18, 7, P, 24, 0.6), { tone: "lo" }));
body.push(
  S(k.slabOf(plate, -11, 11, P, 8, 1.2), { tone: "mid" }),
  L(k.planOutline(k.insetPlan(plate, 5), 0, P), { tone: "lo" }),
);
for (const [x, y] of k.corners(plate, 11))
  body.push(
    L(k.ring(x, y, 2, 0, P, 16), { tone: "mid" }),
    k.dotsSvg([at([x, y, 0])], { size: 0.5 }),
  );
const rule = { x: -100, y: 48, w: 200, d: 10, r: 1 };
body.push(S(k.slabOf(rule, 0, 0.7, P, 3), { tone: "lo" }));
const ticks = k.topTicks(-95, 95, 4, 5, 49, 0.7, [3, 6], P);
body.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "hi" }));
body.push(
  k.faceTextSvg(k.topMatrix([-100, -56], 0.2, P), "VVS / RISK CALIBRATION", {
    size: 4,
    tone: "mid",
  }),
);
// Calibration weights sit on an engraved tray, behind the dial assembly.
body.push(
  S(k.slabOf({ x: -101, y: -30, w: 52, d: 57, r: 3 }, 0, 3, P, 5, 0.5), {
    tone: "lo",
  }),
);
for (const [index, y] of [-23, -5, 13].entries()) {
  const h = [8, 13, 18][index];
  const block = { x: -96, y, w: 40, d: 12, r: 1 };
  body.push(
    S(k.slabOf(block, 3, h, P, 4, 0.6), { tone: "mid" }),
    k.faceTextSvg(
      k.topMatrix([-90, y + 8], 3 + h, P),
      String(index + 1) + " R",
      { size: 4, tone: "hi" },
    ),
  );
}
body.push(S(k.cylinder(27, -2, 47, 0, 13, P, 64, 1), { tone: "lo" }));
body.push(S(k.cylinder(27, -2, 43, 13, 8, P, 64, 0.8), { tone: "mid" }));
body.push(
  S(k.cylinder(27, -2, 39, 21, 0.6, P, 64), { tone: "hi", crease: "none" }),
);
for (let i = 0; i < 61; i++) {
  const a = ((-140 + (i * 280) / 60) * Math.PI) / 180;
  const inner = i % 5 === 0 ? 31 : 34;
  body.push(
    L(
      k.lineOnTop(
        [27 + Math.cos(a) * inner, -2 + Math.sin(a) * inner],
        [27 + Math.cos(a) * 37, -2 + Math.sin(a) * 37],
        21.6,
        P,
      ),
      { tone: i % 5 === 0 ? "hi" : "lo" },
    ),
  );
}
body.push(
  k.faceTextSvg(k.topMatrix([27, 14], 21.6, P), "BUDGET", {
    size: 4,
    tone: "mid",
    anchor: "middle",
  }),
);
const center = at([27, -2, 21.8]),
  x = at([28, -2, 21.8]),
  y = at([27, -1, 21.8]);
body.push(
  `<path data-needle data-ox="${center[0]}" data-oy="${center[1]}" data-xx="${x[0] - center[0]}" data-xy="${x[1] - center[1]}" data-yx="${y[0] - center[0]}" data-yy="${y[1] - center[1]}" d="M${center.join(" ")}L${at([27, -34, 21.8]).join(" ")}" stroke="#dced60" stroke-width="3" stroke-linecap="round"/>`,
);
body.push(
  S(k.cylinder(27, -2, 3.3, 21.8, 2, P, 24, 0.3), { tone: "hi", lit: true }),
);
for (const [x, y] of [
  [92, -25],
  [92, 13],
]) {
  body.push(
    S(k.cylinder(x, y, 9, 0, 6, P, 32, 0.5), { tone: "lo" }),
    S(k.cylinder(x, y, 7.5, 6, 6, P, 32, 0.5), { tone: "mid" }),
    L(k.knurl(x, y, 7.5, 6, 11, 28, P), { tone: "lo" }),
    L(k.lineOnTop([x - 3, y], [x + 3, y], 12, P), { tone: "hi" }),
  );
}
const css = `.iso-fill{fill:#14252d}.iso-shade[data-shade="0"]{fill:#0d1d23}.iso-shade[data-shade="1"]{fill:#18313a}.iso-shade[data-shade="2"]{fill:#24404a}.iso-shade[data-shade="3"]{fill:#2d4a54}.iso-top{fill:#2e4b55}.iso-line,.iso-edge,.iso-bevel{fill:none;stroke:#6d929e;stroke-width:.7;stroke-linejoin:round}.iso-line[data-tone="lo"]{stroke:#47646e}.iso-line[data-tone="hi"]{stroke:#bdcfcc}.iso-fill[data-lit],.iso-solid[data-lit] .iso-top{fill:#dced60}.iso-face-text{fill:#a2bfc4;font-family:monospace}.iso-dot{fill:#b6c6c5}`;
const svg = k.figureSvg({
  width: 600,
  height: 380,
  label: "Instrument illustratif de calibration du budget de risque",
  body: `<style>${css}</style>${body.join("")}`,
});
writeFileSync(
  new URL("../src/assets/risk-instrument.svg", import.meta.url),
  svg,
);
console.log("Instrument SVG generated:", svg.length, "bytes");
