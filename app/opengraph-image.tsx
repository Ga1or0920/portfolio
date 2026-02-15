import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "がろろ | Web Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            がろろ
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: "#a0a0b0",
              letterSpacing: "4px",
            }}
          >
            Web Developer
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            {["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "999px",
                    fontSize: "18px",
                    color: "#d0d0e0",
                    border: "1px solid #333355",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
