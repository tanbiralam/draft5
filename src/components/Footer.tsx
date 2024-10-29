export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img
                src="/assets/logo/footer_logo.svg"
                alt="footer-logo"
                className="shadow-2xl h-8 md:h-10 lg:h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-sm">
              Transforming ambitious professionals into successful Product
              Managers through expert-led training and mentorship.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#program" className="hover:text-blue-500 transition">
                  Program
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-blue-500 transition">
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="hover:text-blue-500 transition"
                >
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://acceleratorx.co/privacy-policy"
                  className="hover:text-blue-500 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://acceleratorx.co/terms-conditions"
                  className="hover:text-blue-500 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 flex flex-col">
              <a href="mailto:info@acceleratorx.co">info@acceleratorx.co</a>
              <a href="tel:+91-8884288277">+91 8884288277</a>
              <a href="https://maps.app.goo.gl/ZwKSw2cJkfj1Yrjb6">
                {" "}
                Obeya, HSR Layout <br /> Sector 5, Bangalore <br /> Karnataka,
                560102{" "}
              </a>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} AcceleratorX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
