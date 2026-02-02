"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
    const handleDownloadPDF = () => {
        // This will trigger browser print dialog which can save as PDF
        window.print();
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <a href="/" className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-nunito)" }}>
                            Papimap
                        </a>
                        <Button
                            onClick={handleDownloadPDF}
                            variant="outline"
                            className="flex items-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download PDF
                        </Button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-gray max-w-none">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                        Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">
                        <strong>Effective date:</strong> February 2026
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Papimap respects your privacy. This policy explains what data we collect, how we use it, and your rights.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            1. Information We Collect
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">a) Account Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">When you sign in with Google, we receive:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Your Google account ID</li>
                            <li>Your email address</li>
                            <li>Your display name (if provided)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            We do <strong>not</strong> receive your Google password.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">b) User Content</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Maps, illustrations, and project data you create inside the app</li>
                            <li>This data is stored only to provide the service</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">c) Technical Data</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">We may collect basic technical data such as:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>IP address (for security and abuse prevention)</li>
                            <li>Usage analytics (pages visited, features used)</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            2. How We Use Your Data
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">We use your data to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Authenticate users and manage accounts</li>
                            <li>Provide and maintain the service</li>
                            <li>Process payments and manage credits</li>
                            <li>Prevent abuse and ensure security</li>
                            <li>Improve Papimap features and performance</li>
                            <li>Communicate important updates about the service</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                            We do <strong>not</strong> sell your data to third parties.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            3. Data Sharing
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">We only share data with:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Authentication providers</strong> (e.g., Google for sign-in)</li>
                            <li><strong>Infrastructure providers</strong> (hosting, databases, cloud services)</li>
                            <li><strong>Payment processors</strong> (for handling transactions)</li>
                            <li><strong>Analytics services</strong> (e.g., Google Analytics, for usage insights)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We only share what is necessary to run and improve the service.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            4. Data Retention
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Account and project data are stored as long as your account is active</li>
                            <li>You may request deletion of your account and data at any time</li>
                            <li>After deletion, some data may be retained for legal or security purposes as required by law</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            5. Cookies & Tracking
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">Papimap uses cookies and similar technologies for:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Authentication and session management</li>
                            <li>Remembering your preferences</li>
                            <li>Analytics and performance monitoring</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We do not use advertising cookies or sell your browsing data.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            6. Your Rights (GDPR)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            If you are in the European Union, you have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Access your data</strong> – Request a copy of the data we hold about you</li>
                            <li><strong>Correct your data</strong> – Update or fix inaccurate information</li>
                            <li><strong>Request deletion</strong> – Delete your account and associated data</li>
                            <li><strong>Withdraw consent</strong> – Stop certain data processing activities</li>
                            <li><strong>Data portability</strong> – Receive your data in a portable format</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            To exercise these rights, contact us at{" "}
                            <a href="mailto:hello@papimap.com" className="text-blue-600 hover:text-blue-800 underline">
                                hello@papimap.com
                            </a>
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            7. Children's Privacy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Papimap is not intended for children under 16. We do not knowingly collect data from children. If we become aware that we have collected data from a child, we will delete it promptly.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            8. Changes to This Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            9. Contact
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about this privacy policy or your data, please contact us at:{" "}
                            <a href="mailto:hello@papimap.com" className="text-blue-600 hover:text-blue-800 underline">
                                hello@papimap.com
                            </a>
                        </p>
                    </section>
                </article>

                {/* Back to Home Link */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                        ← Back to Home
                    </a>
                </div>
            </main>

            {/* Print-specific styles */}
            <style jsx global>{`
        @media print {
          header button,
          header a,
          .no-print {
            display: none !important;
          }
          body {
            background: white;
          }
        }
      `}</style>
        </div>
    );
}
