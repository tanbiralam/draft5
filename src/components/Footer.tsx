import { GraduationCap, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">AcceleratorX</span>
            </div>
            <p className="mt-4 text-sm">
              Transforming ambitious professionals into successful Product Managers through expert-led training and mentorship.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#program" className="hover:text-blue-500 transition">Program</a></li>
              <li><a href="#benefits" className="hover:text-blue-500 transition">Benefits</a></li>
              <li><a href="#curriculum" className="hover:text-blue-500 transition">Curriculum</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>contact@acceleratorx.co</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Product Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}