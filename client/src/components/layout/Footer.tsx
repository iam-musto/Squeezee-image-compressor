import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import icon from "../../assets/squeezee-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 border-t-2 border-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={icon} alt="Squeezee Logo" className="w-8 h-8 mr-2" />
              <h1 className="text-xl sm:text-2xl font-bold text-black">
                Squeezee
              </h1>
            </Link>
            <p className="text-sm text-stone-600">
              Fast, secure, and free image compression. All processing happens
              in your browser.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-stone-600 hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/compress"
                  className="text-sm text-stone-600 hover:text-black transition-colors"
                >
                  Compress Images
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-stone-600 hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-black">Features</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 stroke-black" strokeWidth={2} />
                Client-side processing
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 stroke-black" strokeWidth={2} />
                No file uploads
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 stroke-black" strokeWidth={2} />
                100% private & secure
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 stroke-black" strokeWidth={2} />
                Multiple formats supported
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t-2 border-black">
          <p className="text-center text-sm text-stone-600">
            © {currentYear} ImageCompress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
