"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/app/home.module.scss";

/*
  Regions of /images/gallery/brain.jpg (a coronal scan of the head
  and neck), in source-image pixels (736 × 1308). Checked in order;
  the first match wins, so small structures come before the large
  areas that surround them.
*/
type Shape =
  | { kind: "rect"; x0: number; y0: number; x1: number; y1: number }
  | { kind: "ellipse"; cx: number; cy: number; rx: number; ry: number };

type Region = { name: string; info: string; shapes: Shape[] };

const IMG_W = 736;
const IMG_H = 1308;

const REGIONS: Region[] = [
  {
    name: "Longitudinal fissure",
    info: "The deep groove that divides the brain into left and right hemispheres.",
    shapes: [{ kind: "rect", x0: 352, y0: 90, x1: 386, y1: 270 }],
  },
  {
    name: "Lateral ventricles",
    info: "Fluid-filled chambers that produce and circulate cerebrospinal fluid.",
    shapes: [
      { kind: "ellipse", cx: 305, cy: 335, rx: 50, ry: 70 },
      { kind: "ellipse", cx: 433, cy: 335, rx: 50, ry: 70 },
    ],
  },
  {
    name: "Brainstem",
    info: "Connects the brain to the spinal cord and runs breathing, heart rate and sleep.",
    shapes: [{ kind: "rect", x0: 318, y0: 520, x1: 420, y1: 690 }],
  },
  {
    name: "Basal ganglia & thalamus",
    info: "Deep clusters of neurons that shape movement and relay sensory signals to the cortex.",
    shapes: [{ kind: "ellipse", cx: 368, cy: 475, rx: 190, ry: 75 }],
  },
  {
    name: "Temporal lobe",
    info: "Processes sound, language and memory; home of the hippocampus.",
    shapes: [
      { kind: "ellipse", cx: 175, cy: 600, rx: 120, ry: 125 },
      { kind: "ellipse", cx: 562, cy: 600, rx: 120, ry: 125 },
    ],
  },
  {
    name: "White matter",
    info: "Bundles of insulated axons that carry signals between brain regions.",
    shapes: [{ kind: "ellipse", cx: 368, cy: 360, rx: 235, ry: 215 }],
  },
  {
    name: "Cerebral cortex",
    info: "The folded outer layer where perception, reasoning and planning happen.",
    shapes: [{ kind: "ellipse", cx: 368, cy: 400, rx: 312, ry: 325 }],
  },
  {
    name: "Skull & meninges",
    info: "Bone and three protective membranes that cushion and shield the brain.",
    shapes: [{ kind: "ellipse", cx: 368, cy: 400, rx: 345, ry: 375 }],
  },
  {
    name: "Spinal cord & cervical spine",
    info: "Carries signals between the brain and body, protected by the neck vertebrae.",
    shapes: [{ kind: "rect", x0: 300, y0: 690, x1: 440, y1: IMG_H }],
  },
  {
    name: "Cervical nerves",
    info: "Nerves branching from the neck that serve the head, shoulders and arms.",
    shapes: [{ kind: "rect", x0: 90, y0: 720, x1: 650, y1: IMG_H }],
  },
];

function hit(shape: Shape, x: number, y: number) {
  if (shape.kind === "rect") {
    return x >= shape.x0 && x <= shape.x1 && y >= shape.y0 && y <= shape.y1;
  }
  const dx = (x - shape.cx) / shape.rx;
  const dy = (y - shape.cy) / shape.ry;
  return dx * dx + dy * dy <= 1;
}

// Must match .brainImg's object-fit: cover and object-position: 68% center.
const OBJECT_POS_X = 0.68;
const OBJECT_POS_Y = 0.5;

type Selection = { x: number; y: number; region: Region | null };

export function BrainHero({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as Element).closest("a, button")) return;
    if (window.getSelection()?.toString()) return;
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    // Undo object-fit: cover to find the source-image pixel under the click
    const scale = Math.max(rect.width / IMG_W, rect.height / IMG_H);
    const offsetX = (rect.width - IMG_W * scale) * OBJECT_POS_X;
    const offsetY = (rect.height - IMG_H * scale) * OBJECT_POS_Y;
    const ix = (px - offsetX) / scale;
    const iy = (py - offsetY) / scale;

    const region = REGIONS.find((r) => r.shapes.some((s) => hit(s, ix, iy))) ?? null;
    setSelection({ x: px, y: py, region });
  }, []);

  useEffect(() => {
    if (!selection) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelection(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selection]);

  // Keep the label inside the hero: open it left near the right
  // edge and upward near the bottom
  const section = sectionRef.current;
  const flipX = !!selection && !!section && selection.x > section.clientWidth - 300;
  const flipY = !!selection && !!section && selection.y > section.clientHeight - 160;

  return (
    <section ref={sectionRef} className={styles.hero} onClick={handleClick}>
      <div className={styles.heroBg}>
        <img
          className={styles.brainImg}
          src="/images/gallery/brain.jpg"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className={styles.heroOverlay} />

      {children}

      {selection && (
        <div
          className={styles.brainMarker}
          style={{ left: selection.x, top: selection.y }}
          aria-hidden="true"
        />
      )}
      {selection && (
        <div
          className={styles.brainLabel}
          style={{
            left: selection.x,
            top: selection.y,
            transform: `translate(${flipX ? "calc(-100% - 32px)" : "0"}, ${
              flipY ? "calc(-100% - 32px)" : "0"
            })`,
          }}
        >
          <span className={styles.brainLabelName}>
            {selection.region ? selection.region.name : "Outside the brain"}
          </span>
          <span className={styles.brainLabelInfo}>
            {selection.region
              ? selection.region.info
              : "Try clicking on the scan itself."}
          </span>
        </div>
      )}

      <p className={styles.brainHint} aria-live="polite">
        {selection?.region
          ? `Selected: ${selection.region.name}`
          : "Click the scan to identify a region"}
      </p>
    </section>
  );
}
