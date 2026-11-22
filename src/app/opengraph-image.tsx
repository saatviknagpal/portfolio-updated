import { ImageResponse } from "next/og";

export const alt = "Saatvik Nagpal: I write the tests AI agents have to pass.";
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
        <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2 }}>
          I write the tests AI agents have to pass.
        </div>
        <div style={{ fontSize: 30, color: "#737373" }}>
          Software engineer · San Francisco · saatviknagpal.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
