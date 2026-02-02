"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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
                        Terms of Service
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">
                        <strong>Effective date:</strong> February 2026
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Welcome to <strong>Papimap</strong> ("we", "our", "us"). Papimap is an illustrated map builder that allows users to create and export custom maps.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        By accessing or using Papimap (including papimap.com and app.papimap.com), you agree to these Terms of Service. If you do not agree, please do not use the service.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            1. Eligibility
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            You must be at least 16 years old (or the minimum legal age in your country) to use Papimap.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            2. Account & Authentication
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Papimap uses <strong>Google Sign-In</strong> for authentication.</li>
                            <li>You are responsible for maintaining the security of your account.</li>
                            <li>We are not responsible for any loss or damage caused by unauthorized access to your account.</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            3. Use of the Service
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Use Papimap for illegal or harmful purposes</li>
                            <li>Upload content that violates copyright, trademark, or intellectual property rights</li>
                            <li>Attempt to reverse engineer, abuse, or overload the service</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We reserve the right to suspend or terminate accounts that violate these terms.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            4. User Content & Ownership
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>You retain ownership of the maps and content you create.</li>
                            <li>By using Papimap, you grant us a limited license to process and store your content solely to provide the service.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We do <strong>not</strong> claim ownership over your designs.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            5. Credits & Payments
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Some features (e.g., high-resolution exports, landmark creation) require credits.</li>
                            <li>Credits can be purchased through our pricing plans.</li>
                            <li>All purchases are final unless required otherwise by law.</li>
                            <li>Credits do not expire as long as your account remains active.</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            6. Service Availability & Changes
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Papimap is provided "as is". We do not guarantee uninterrupted or error-free service.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We may modify, suspend, or discontinue parts of the service at any time, with or without notice.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            7. Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Papimap is not liable for indirect, incidental, or consequential damages</li>
                            <li>Use of the service is at your own risk</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            8. Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            These terms are governed by the laws of <strong>The Netherlands</strong>, unless otherwise required by law.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-200" />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                            9. Contact
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            For questions about these terms, contact us at:{" "}
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