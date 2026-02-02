"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { hasConsent, setConsent } from "@/lib/consent";
import { Cookie } from "lucide-react";

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already responded to the banner
        if (!hasConsent()) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setConsent("accepted");
        setShowBanner(false);
    };

    const handleReject = () => {
        setConsent("rejected");
        setShowBanner(false);

        // Disable Google Analytics tracking
        if (typeof window !== "undefined") {
            // @ts-ignore
            window['ga-disable-G-C8F52E67CX'] = true;
        }
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Icon and Text */}
                    <div className="flex items-start gap-3 flex-1">
                        <Cookie className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-gray-700">
                            <p className="mb-1">
                                We use cookies to analyze traffic and improve the website.
                            </p>
                            <p className="text-xs text-gray-500">
                                Read our{" "}
                                <a
                                    href="/privacy"
                                    className="underline hover:text-gray-900 transition-colors"
                                >
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/terms"
                                    className="underline hover:text-gray-900 transition-colors"
                                >
                                    Terms of Service
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                        <Button
                            onClick={handleReject}
                            variant="outline"
                            size="sm"
                            className="font-medium"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={handleAccept}
                            size="sm"
                            className="font-medium"
                            style={{
                                backgroundColor: "var(--primary)",
                                color: "#1a1a1a",
                            }}
                        >
                            Accept
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
