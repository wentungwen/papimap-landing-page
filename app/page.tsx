"use client";

import { motion } from "framer-motion";
import { MapPin, Check, ArrowRight, Github, Twitter, Info } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { mapShowcases, howToSteps } from "@/data/landing-data";
import { TallyForm } from "@/components/tally-form";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Map Image Placeholder */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/20 via-white to-[var(--primary)]/10"
          style={{
            backgroundImage: "url('/landing-images/landing.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Create pretty illustrated maps easily
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-12">
              Design cute and professional maps that match your brand, without
              the design studio price tag. For weddings, events, or tourism.{" "}
            </p>

            {/* CTA Button */}
            <div className="flex">
              <Button
                size="lg"
                className="h-12 px-8 text-base font-semibold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
                onClick={() => setIsFormOpen(true)}
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Tally Form Modal */}
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogTitle className="sr-only">
                  Join Papimap Waitlist
                </DialogTitle>
                <div className="p-4">
                  <TallyForm />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* How-To Section */}
      <section
        id="how-it-works"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--primary)]/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create beautiful illustrated maps in 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {howToSteps.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  {/* Step Image */}
                  <div className="mb-6 rounded-lg overflow-hidden shadow-md border border-gray-100 bg-white">
                    <Image
                      src={step.image}
                      alt={`Step ${step.step}: ${step.title}`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2 text-gray-900"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="map-demos" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Explore Maps Created with Our Builder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any map to see how it was made and the features used.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mapShowcases.map((map) => (
              <Dialog key={map.id}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={map.image}
                        alt={map.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h3
                        className="font-semibold text-gray-900"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        {map.title}
                      </h3>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="w-full sm:max-w-[90vw] max-h-[90vh] overflow-hidden p-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col md:flex-row h-full"
                  >
                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center space-y-6 p-8 md:p-12 md:w-1/3">
                      <div>
                        <DialogTitle
                          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          {map.title}
                        </DialogTitle>
                        <DialogDescription className="text-base md:text-lg text-gray-600 leading-relaxed">
                          {map.description}
                        </DialogDescription>
                      </div>
                      <Button
                        onClick={() => setIsFormOpen(true)}
                        className="w-full rounded-full font-semibold text-base py-6"
                        style={{
                          backgroundColor: "#F2BD50",
                          color: "#1a1a1a",
                        }}
                      >
                        Join waitlist
                      </Button>
                    </div>

                    {/* Right: Full Image */}
                    <div className="relative w-full md:w-2/3 h-[300px] md:h-auto min-h-[400px] md:min-h-[600px] bg-gray-50">
                      <Image
                        src={map.image}
                        alt={map.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--primary)]/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Choose Your Creative Fuel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple pricing. Full commercial freedom. No subscriptions.
            </p>
          </motion.div>

          {/* Three Column Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {/* Free (The Explorer) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="relative h-full flex flex-col border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle
                    className="text-2xl mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Free
                  </CardTitle>
                  <div className="text-sm text-gray-600 mb-4">The Explorer</div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-gray-900">€0</span>
                    <span className="text-lg text-gray-500">/50 credits</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium flex items-center gap-1.5">
                        50 Trial Credits
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-gray-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 text-white border-gray-800">
                              <div className="text-xs space-y-1">
                                <div>🎨 Create Landmark: 20 Pts</div>
                                <div>🗺️ Vectorize Base Map: 20 Pts</div>
                                <div>📥 Final Export: 100 Pts</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        200+ Asset Library
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Watermarked Exports
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Personal Use Only</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    variant="outline"
                    className="w-full h-12 text-base font-semibold border-2 hover:bg-gray-50"
                  >
                    Start Drawing
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Starter (The Maker) - HIGHLIGHTED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-75 blur-lg"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), var(--secondary))",
                }}
              />

              <Card className="relative h-full flex flex-col border-2 bg-white shadow-xl"
                style={{ borderColor: "var(--primary)" }}
              >
                {/* Best Value Badge */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10 flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#1a1a1a",
                  }}
                >
                  <span className="text-lg">🏆</span>
                  <span>Best Value</span>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle
                    className="text-2xl mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Starter
                  </CardTitle>
                  <div className="text-sm text-gray-600 mb-4">The Maker</div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-gray-900">€10</span>
                    <span className="text-lg text-gray-500">/1,000 credits</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium flex items-center gap-1.5">
                        1,000 Credits
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-gray-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 text-white border-gray-800">
                              <div className="text-xs space-y-1">
                                <div>🎨 Create Landmark: 20 Pts</div>
                                <div>🗺️ Vectorize Base Map: 20 Pts</div>
                                <div>📥 Final Export: 100 Pts</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Commercial License</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Standard High-Res Exports
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-gray-400">~</span>
                      </div>
                      <span className="text-gray-600 text-sm">
                        ~2 Full Map Projects
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full h-12 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "#1a1a1a",
                    }}
                  >
                    Get Best Value
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Creator (The Studio) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="relative h-full flex flex-col border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle
                    className="text-2xl mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Creator
                  </CardTitle>
                  <div className="text-sm text-gray-600 mb-4">The Studio</div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-gray-900">€20</span>
                    <span className="text-lg text-gray-500">/3,000 credits</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium flex items-center gap-1.5">
                        3,000 Credits
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-gray-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 text-white border-gray-800">
                              <div className="text-xs space-y-1">
                                <div>🎨 Create Landmark: 20 Pts</div>
                                <div>🗺️ Vectorize Base Map: 20 Pts</div>
                                <div>📥 Final Export: 100 Pts</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Commercial License</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Standard High-Res Exports
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-gray-400">~</span>
                      </div>
                      <span className="text-gray-600 text-sm">
                        ~7 Full Map Projects
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    variant="outline"
                    className="w-full h-12 text-base font-semibold border-2 hover:bg-gray-50"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/favicon/android-chrome-192x192.png"
                    alt="Papi Map Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Papi Map
                </span>
              </div>
              <p className="text-sm text-gray-600">
                The pretty illustrated map builder for creators and businesses.
              </p>
            </div>

            {/* Links */}
            <div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Social</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8DC4DA] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8DC4DA] transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Papi Map. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
