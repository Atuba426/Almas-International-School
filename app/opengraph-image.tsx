import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${SITE_CONFIG.name} - Best CBSE School in Vikarabad, Telangana with Boys Hostel`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";


export default async function OpengraphImage() {
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
          backgroundColor: "#14532D",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(250, 204, 21, 0.25) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "84px",
              height: "84px",
              borderRadius: "24px",
              backgroundColor: "#FACC15",
              color: "#14532D",
              fontSize: "44px",
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "40px", fontWeight: 800, color: "#FFFFFF" }}>
              {SITE_CONFIG.name}
            </span>
            <span style={{ fontSize: "24px", color: "#FACC15", fontWeight: 600 }}>
              {SITE_CONFIG.addressLocality}, {SITE_CONFIG.addressRegion}
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "48px",
            fontSize: "54px",
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          Best CBSE School with Boys Hostel
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "20px",
          }}
        >
          {["100% CBSE Results", "5 Years Running", "Nature Campus", "Boys Hostel"].map(
            (label) => (
              <div
                key={label}
                style={{
                  padding: "14px 28px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
