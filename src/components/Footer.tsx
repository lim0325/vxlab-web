import Link from "next/link";

const footerLinks = {
  Products: [
    { name: "VxCT Studio", href: "/products#vxct-studio" },
    { name: "VxCT Engine", href: "/products#vxct-engine" },
    { name: "VxCT Inline", href: "/products#vxct-inline" },
  ],
  Solutions: [
    { name: "Aerospace", href: "/solutions#aerospace" },
    { name: "Automotive", href: "/solutions#automotive" },
    { name: "Electronics", href: "/solutions#electronics" },
    { name: "Research", href: "/solutions#research" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">Vx</span>
              </div>
              <span className="text-xl font-bold text-white">
                Vx<span className="text-accent">Lab</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Advanced X-ray CT reconstruction software for industrial inspection and quality control.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} VxLab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
