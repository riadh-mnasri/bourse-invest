/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Generated Open Graph / social preview image for the home page.
 */
import { ImageResponse } from "next/og";

export const alt = "BourseInvest";
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#10160f",
          color: "#ece4d3",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(121,181,126,0.16) 0, rgba(121,181,126,0.16) 1px, transparent 1px, transparent 56px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M12 21V11" stroke="#ece4d3" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M12 11C12 6 8 4 4 4C4 8 6 11 12 11Z" fill="#e2895a" />
            <path d="M12 14C12 10 15.5 8 20 8C20 11.5 18 14 12 14Z" fill="#e2895a" />
          </svg>
          <span style={{ fontSize: 30, fontWeight: 600 }}>
            Bourse<span style={{ color: "#e2895a" }}>Invest</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          Devenir un investisseur qui comprend ce qu&apos;il fait
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#a09b8a",
            maxWidth: 820,
          }}
        >
          Bases de la bourse, fiscalite francaise et routine d&apos;investisseur, en francais et en anglais.
        </div>
      </div>
    ),
    { ...size }
  );
}
