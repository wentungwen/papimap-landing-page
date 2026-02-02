"use client";

import Script from "next/script";
import { hasAnalyticsConsent } from "@/lib/consent";

export function ConditionalAnalytics() {
    const hasConsent = hasAnalyticsConsent();

    // Only render Google Analytics if user has accepted cookies
    if (!hasConsent) {
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-C8F52E67CX"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C8F52E67CX');
          `,
                }}
            />
        </>
    );
}
