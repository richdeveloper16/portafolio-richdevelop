import Script from "next/script";

export default function PrivateAnalytics() {
  const websiteId = process.env.UMAMI_WEBSITE_ID?.trim();
  const scriptUrl = process.env.UMAMI_SCRIPT_URL?.trim();

  if (process.env.NODE_ENV !== "production" || !websiteId || !scriptUrl) {
    return null;
  }

  return (
    <Script
      id="umami-analytics"
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
