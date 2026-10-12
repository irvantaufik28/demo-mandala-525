import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const brochure = await readFile(
    path.join(process.cwd(), "public/images/mandala/brosur-fasilitas.jpg"),
  );
  const image = `data:image/jpeg;base64,${brochure.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: 64,
        height: 64,
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* The original circular logo occupies x=930..1026, y=48..144 in the brochure. */}
      <img
        src={image}
        alt=""
        width={720}
        height={900}
        style={{ position: "absolute", left: -620, top: -32 }}
      />
    </div>,
    size,
  );
}
