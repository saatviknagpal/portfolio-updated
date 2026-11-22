import { ImageResponse } from "next/og";

export const alt = "Saatvik Nagpal: full-stack engineer building AI agents and evals.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fafafa",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 36, color: "#737373" }}>Saatvik Nagpal</div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2 }}>
          I build AI agents, and the evals that tell me whether they work.
        </div>
        <div style={{ fontSize: 30, color: "#737373" }}>
          Full-stack engineer · San Francisco · saatviknagpal.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
