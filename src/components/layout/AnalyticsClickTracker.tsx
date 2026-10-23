"use client";

import { useEffect } from "react";

const socialDomains = [
  "facebook.com",
  "instagram.com",
  "linkedin.com",
  "youtube.com",
  "yelp.com",
  "tiktok.com",
  "twitter.com",
  "x.com",
  "whatsapp.com",
  "wa.me",
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function getSocialDomain(hostname: string) {
  return socialDomains.find(
    (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
  );
}

export function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.href;
      const linkText = link.textContent?.trim().replace(/\s+/g, " ") || "";
      const baseParameters = {
        link_url: href,
        link_text: linkText,
        page_location: window.location.href,
      };

      const sendEvent = (eventName: string, parameters: Record<string, string>) => {
        window.gtag?.("event", eventName, parameters);
      };

      if (link.protocol === "tel:") {
        sendEvent("phone_call_click", baseParameters);
        return;
      }

      if (link.protocol === "mailto:") {
        sendEvent("email_click", baseParameters);
        return;
      }

      if (link.protocol !== "http:" && link.protocol !== "https:") return;
      if (link.origin === window.location.origin) return;

      const socialDomain = getSocialDomain(link.hostname);
      if (socialDomain) {
        sendEvent("social_media_click", {
          ...baseParameters,
          social_platform: socialDomain,
        });
      }

      sendEvent("external_link_click", {
        ...baseParameters,
        link_domain: link.hostname,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
