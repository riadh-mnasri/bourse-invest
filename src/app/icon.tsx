/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Generated favicon: a terracotta sprout on a deep forest-green square,
 * evoking patient growth rather than a market ticker.
 */
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f5233",
          borderRadius: 14,
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21V11"
            stroke="#f5f0e3"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M12 11C12 6 8 4 4 4C4 8 6 11 12 11Z"
            fill="#d99a5b"
          />
          <path
            d="M12 14C12 10 15.5 8 20 8C20 11.5 18 14 12 14Z"
            fill="#d99a5b"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
