/**
 * Consent utility for managing GDPR cookie consent
 * SSR-safe implementation
 */

const CONSENT_KEY = "papimap_cookie_consent";

export type ConsentStatus = "accepted" | "rejected" | null;

/**
 * Get the current consent status from localStorage
 * Returns null if no consent has been given yet
 */
export function getConsent(): ConsentStatus {
    if (typeof window === "undefined") {
        return null; // SSR-safe
    }

    try {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (consent === "accepted" || consent === "rejected") {
            return consent;
        }
        return null;
    } catch (error) {
        console.error("Error reading consent:", error);
        return null;
    }
}

/**
 * Set the consent status in localStorage
 */
export function setConsent(status: "accepted" | "rejected"): void {
    if (typeof window === "undefined") {
        return; // SSR-safe
    }

    try {
        localStorage.setItem(CONSENT_KEY, status);
    } catch (error) {
        console.error("Error saving consent:", error);
    }
}

/**
 * Check if consent has been given (either accepted or rejected)
 */
export function hasConsent(): boolean {
    return getConsent() !== null;
}

/**
 * Check if analytics cookies are accepted
 */
export function hasAnalyticsConsent(): boolean {
    return getConsent() === "accepted";
}
