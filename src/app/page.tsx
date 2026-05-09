"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MediaProd TN"
      button={{
        text: "Get Started",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Elevating Media Production in Tunisia"
      description="The ultimate production platform for agencies and brands. Streamline your workflow from pre-production to final delivery with luxury precision."
      buttons={[
        {
          text: "Book Production",
          href: "#contact",
        },
        {
          text: "Request Demo",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lens-background-process-shooting-light-background_185193-164069.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-beautiful-strict-woman-glasses_1262-1732.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businessman-smiling-camera_107420-95907.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Trusted by 500+ creatives"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Crafting Stories with Technological Precision"
      tag="About Us"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Dynamic Scheduling",
          description: "Book studio time and shooting sessions with an intuitive drag-and-drop calendar.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-computer-screen-with-data-chart-information-finance-analysis-desk_482257-40065.jpg",
        },
        {
          title: "Secure Cloud Storage",
          description: "Centralized, high-speed file storage for massive 4K video assets and project files.",
          imageSrc: "http://img.b2bpic.net/free-photo/security-cloud_1048-2442.jpg",
        },
        {
          title: "Real-time Collaboration",
          description: "Built-in communication tools to bridge the gap between creative teams and clients.",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-landing-page-template_23-2149052121.jpg",
        },
      ]}
      title="Seamless Production Ecosystem"
      description="Everything your production agency needs in one unified platform."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "40%",
          title: "Time Saved",
          description: "Reduced pre-production cycles through automation.",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169856.jpg",
        },
        {
          id: "2",
          value: "120+",
          title: "Active Projects",
          description: "Manage global media assets with ease.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-using-computer-make-use-text-video-with-ai_482257-119684.jpg",
        },
        {
          id: "3",
          value: "99.9%",
          title: "Uptime Reliability",
          description: "High-availability file access for production.",
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-creative-game-creators-sitting-desk-with-multiple-displays-while-working-with-3d-assets-digital-interactive-entertainment-industry-workers-working-with-cgi_482257-43890.jpg",
        },
      ]}
      title="Proven Production Efficiency"
      description="Quantifiable gains for modern media agencies."
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Lumière Creative",
        "Tunis Film Lab",
        "Maghreb Media",
        "Atlas Productions",
        "Sahara Content",
        "Carthage Studios",
        "Medina Digital",
      ]}
      title="Trusted by Market Leaders"
      description="Partnering with the finest studios in the region."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The most sophisticated tool I've used for my production workflow. It feels like the Notion of media agencies."
      rating={5}
      author="Amira Ben Youssef"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",
          alt: "Amira",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-male-personal-shopper-working_23-2148924153.jpg",
          alt: "Ahmed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-glasses_23-2148766932.jpg",
          alt: "Layla",
        },
        {
          src: "http://img.b2bpic.net/free-photo/paralysed-disabled-invalid-handicapped-work-colleague-looking-front-tired-upset-caused-his-disabilities-working-economic-business-office_482257-2084.jpg",
          alt: "Yassine",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-office-worker-sitting-desk_1098-21342.jpg",
          alt: "Omar",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How do I book a session?",
          content: "You can select your desired studio time directly from the projects dashboard.",
        },
        {
          id: "2",
          title: "Is my media secure?",
          content: "All assets are stored with enterprise-grade encryption for total peace of mind.",
        },
        {
          id: "3",
          title: "Can I chat with the team?",
          content: "Yes, real-time messaging is enabled within each project space.",
        },
      ]}
      sideTitle="Questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get in touch"
      title="Start your production journey."
      description="Join the elite network of Tunisian media agencies."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Pricing",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 MediaProd TN"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
