"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Instagram, Info } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-start pt-[15%] overflow-hidden"
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
        {/* Mobile Background Map Image */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/20 via-white to-[var(--primary)]/10 md:hidden"
          style={{
            backgroundImage: "url('/landing-images/mobile-landing.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg text-center md:text-left mx-auto md:mx-0 mt-8 md:mt-0"
          >
            <h1
              className="text-5xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Pretty maps <br/> <span style={{ fontFamily: "'Satisfy', cursive", color: "var(--destructive)" }}>made easy</span>
            </h1>
            <p className="text-2xl sm:text-2xl md:text-xl text-gray-600 mb-6 max-w-xs md:max-w-none mx-auto md:mx-0">
              Design custom illustrated maps for weddings, events & tourism. <b>Launching soon on February, 2026!</b>
            </p>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
                onClick={() => setIsFormOpen(true)}
              >
                Get Started
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              How It Works
            </h2>
            <p className="text-lg sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Explore Maps Created with Our Builder
            </h2>
            <p className="text-lg sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
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
                <DialogContent className="w-full sm:max-w-[90vw] max-h-[95vh] overflow-y-auto p-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col md:flex-row w-full"
                  >
                    {/* Mobile Title Section */}
                    <div className="md:hidden p-6 pb-4 border-b w-full">
                      <DialogTitle
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        {map.title}
                      </DialogTitle>
                    </div>

                    {/* Image - second on mobile, last on desktop */}
                    <div className="relative w-full md:w-2/3 bg-gray-50 order-2 md:order-last">
                      <Image
                        src={map.image}
                        alt={map.title}
                        width={800}
                        height={1000}
                        className="w-full h-auto object-contain p-2 md:p-4"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>

                    {/* Description and Button - third on mobile, first on desktop */}
                    <div className="flex flex-col justify-start md:justify-center space-y-6 p-6 md:p-12 w-full md:w-1/3 order-3 md:order-first">
                      {/* Desktop Title */}
                      <div className="hidden md:block">
                        <DialogTitle
                          className="text-4xl font-bold mb-4 text-gray-900"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          {map.title}
                        </DialogTitle>
                      </div>

                      <DialogDescription className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {map.description}
                      </DialogDescription>

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
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Pricing
            </h2>
            <p className="text-lg sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
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
                <CardHeader className="text-center pb-4 sm:pb-8">
                  <CardTitle
                    className="text-lg sm:text-2xl mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Free
                  </CardTitle>
                  <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">The Explorer</div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl sm:text-5xl font-bold text-gray-900">€0</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs sm:text-lg text-gray-500">/50 credits</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">50 Trial Credits</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">200+ Asset Library</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">Watermarked Exports</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">Personal Use Only</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-6">
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    variant="outline"
                    className="w-full h-10 sm:h-12 text-xs sm:text-base font-semibold border-2 hover:bg-gray-50"
                  >
                    Get Started
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

              <Card
                className="relative h-full flex flex-col border-2 bg-white shadow-xl"
                style={{ borderColor: "var(--primary)" }}
              >
                {/* Best Value Badge */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10 flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#1a1a1a",
                  }}
                >
                  <span className="text-sm sm:text-lg">🏆</span>
                  <span>Best Value</span>
                </div>
                <CardHeader className="text-center pb-4 sm:pb-8 pt-6 sm:pt-8">
                  <CardTitle
                    className="text-lg sm:text-2xl mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Starter
                  </CardTitle>
                  <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">The Maker</div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl sm:text-5xl font-bold text-gray-900">
                      €10
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs sm:text-lg text-gray-500">
                        /1,000 credits
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">1,000 Credits for landmark creation and map exports</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">Commercial License</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">
                        Standard High-Res Exports
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">
                        ~2 Full Map Projects with 15-20 landmarks each
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-6">
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full h-10 sm:h-12 text-xs sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "#1a1a1a",
                    }}
                  >
                    Get Early Access
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
                <CardHeader className="text-center pb-4 sm:pb-8">
                  <CardTitle
                    className="text-lg sm:text-2xl mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Creator
                  </CardTitle>
                  <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">The Studio</div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl sm:text-5xl font-bold text-gray-900">
                      €20
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs sm:text-lg text-gray-500">
                        /3,000 credits
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">3,000 Credits for landmark creation and map exports</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">Commercial License</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">
                        Standard High-Res Exports
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 sm:h-5 w-4 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">
                        ~7 Full Map Projects
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-6">
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    variant="outline"
                    className="w-full h-10 sm:h-12 text-xs sm:text-base font-semibold border-2 hover:bg-gray-50"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row w-full min-h-[600px]"
          >
            {/* Image */}
            <div className="w-full md:w-4/10 md:order-first overflow-hidden h-full">
              <Image
                src="/landing-images/about-image.jpg"
                alt="About Papimap"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-6/10 md:order-last px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-0 flex flex-col justify-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                About Papimap
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Papimap is an illustrated map builder made for people who want maps that actually look good.
                </p>
                <p>
                  Instead of cold, technical maps, Papimap helps you create cute, flat-style illustrated maps using houses, tents, landmarks, and other charming assets. You can highlight important places, add labels and titles, and export everything as print-ready files, perfect for posters, flyers, welcome guides, or wall art.
                </p>
                <p>
                  It&apos;s built for Airbnb hosts, small hotels, event organizers, local guides, and tourism teams who need clear, friendly maps without learning complicated software.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/favicon/android-chrome-192x192.png"
                    alt="Papimap Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Papimap
                </span>
              </div>
              <p className="text-sm text-gray-600">
                The pretty illustrated map builder for real places. No design skills needed!
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Social</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.reddit.com/r/illustratedmap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF4500] transition-colors"
                  aria-label="Reddit"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/qrqrn15043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#000000] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/hello.papimap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Join the <a href="https://www.reddit.com/r/illustratedmap/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF4500] transition-colors">r/illustratedmap</a> on Reddit for more pretty maps!
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Papimap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
