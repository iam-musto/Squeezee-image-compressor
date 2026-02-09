import { Check } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
          About Squeezee
        </h1>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="border-2 border-black p-6 sm:p-8 bg-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              What is Squeezee?
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Squeezee is a free, open-source web application that allows you to
              compress your images quickly and efficiently. Upload your images,
              adjust quality settings, and get optimized results instantly. With
              complete privacy and no persistent storage - your images are
              processed and deleted immediately.
            </p>
          </section>

          {/* How it Works */}
          <section className="border-2 border-black p-6 sm:p-8 bg-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              How It Works
            </h2>
            <div className="space-y-4 text-stone-600">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-black">1</span>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Upload Your Images
                  </h3>
                  <p>
                    Drag and drop or select images from your device. All
                    processing happens locally.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-black">2</span>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Adjust Settings
                  </h3>
                  <p>
                    Choose your desired quality level and output format. See
                    results in real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-black">3</span>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Download Results
                  </h3>
                  <p>
                    Download your compressed images individually or all at once.
                    That's it!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="border-2 border-black p-6 sm:p-8 bg-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-4">
              Squeezee takes your privacy seriously. While images are processed
              on our servers for optimal results, we ensure complete privacy and
              security:
            </p>
            <ul className="space-y-2 text-stone-600">
              <li className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 stroke-black mt-0.5"
                  strokeWidth={2}
                />
                <span>
                  Images are processed in memory and never persisted to disk
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 stroke-black mt-0.5"
                  strokeWidth={2}
                />
                <span>No image storage or database backups</span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 stroke-black mt-0.5"
                  strokeWidth={2}
                />
                <span>No tracking, analytics, or data collection</span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 stroke-black mt-0.5"
                  strokeWidth={2}
                />
                <span>
                  All source code is open source and publicly auditable
                </span>
              </li>
            </ul>
          </section>

          {/* Open Source */}
          <section className="border-2 border-black p-6 sm:p-8 bg-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Free & Open Source
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Squeezee is completely free to use and will always remain that
              way. No hidden fees, no premium features, no watermarks. Just a
              simple, effective tool for compressing images.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
