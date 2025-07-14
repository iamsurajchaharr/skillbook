import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/placeholder-footer-logo.png" alt="Company Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-400 mb-4 text-center md:text-left">Empowering your agile journey.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter"><img src="/placeholder-twitter.png" alt="Twitter" className="h-6" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/placeholder-linkedin.png" alt="LinkedIn" className="h-6" /></a>
            <a href="#" aria-label="Facebook"><img src="/placeholder-facebook.png" alt="Facebook" className="h-6" /></a>
          </div>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Courses</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">SAFe® Certification</a></li>
            <li><a href="#" className="hover:text-white">Scrum Master</a></li>
            <li><a href="#" className="hover:text-white">Product Owner</a></li>
            <li><a href="#" className="hover:text-white">Agile Coach</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  )
}
