import React from "react";
import { Lock, Zap, Target, DollarSign, Smartphone, Image } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="border-2 border-black p-6 bg-stone-100 hover:bg-stone-200 transition-colors">
      <Icon className="w-10 h-10 mb-4 stroke-black" strokeWidth={2} />
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: "100% Private",
      description:
        "All compression happens in your browser. Your images never leave your device.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Instant compression with no uploads or downloads. Process multiple images at once.",
    },
    {
      icon: Target,
      title: "High Quality",
      description:
        "Reduce file size while maintaining excellent visual quality. You control the balance.",
    },
    {
      icon: DollarSign,
      title: "Completely Free",
      description:
        "No subscriptions, no hidden fees, no watermarks. Free forever for everyone.",
    },
    {
      icon: Smartphone,
      title: "Works Anywhere",
      description:
        "Fully responsive design works on desktop, tablet, and mobile devices.",
    },
    {
      icon: Image,
      title: "Multiple Formats",
      description:
        "Support for JPEG, PNG, WebP, and more. Convert between formats easily.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Squeezee?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Powerful features designed with your privacy and convenience in
            mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
