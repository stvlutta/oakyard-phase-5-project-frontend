import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary-foreground text-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold">Oakyard</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Connecting communities through shared spaces. Find, book, and enjoy unique venues for all your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Features
              </Link>
              <Link to="/pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/how-it-works" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                How It Works
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/careers" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Careers
              </Link>
              <Link to="/partners" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Partners
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Help Center
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
              <Link to="/status" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Status
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Oakyard. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};