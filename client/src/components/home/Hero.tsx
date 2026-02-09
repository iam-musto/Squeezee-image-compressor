import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.png";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Compress Your Images
              <span className="block mt-2">Instantly</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-8">
              Fast, free, and secure image compression. All processing happens
              locally in your browser - your images never leave your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link to="/compress">
                <Button size="lg" variant="primary">
                  Start Compressing
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual/Icon Section */}
          <div className="relative">
            <div className="border-4 border-black bg-stone-100 relative">
              <img
                src={heroImage}
                alt="Image Compression Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
