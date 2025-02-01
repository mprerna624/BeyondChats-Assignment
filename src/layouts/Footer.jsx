import React from "react";
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {/* Company info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="BeyondChats Logo" className="h-6 w-auto" />
              <span className="text-lg font-bold">Beyond Chats</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with AI-powered chatbot solutions for better customer engagement.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-start-3 lg:justify-self-end"> 
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Company</h3>
                <ul className="space-y-2">
                  {['About', 'Features', 'Pricing', 'Careers'].map((item) => (
                    <li key={item}>
                      <Link
                        to="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Support</h3>
                <ul className="space-y-2">
                  {['Documentation', 'Guides', 'API Status', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link
                        to="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
            <div className="w-full text-sm text-gray-400 text-center sm:text-left sm:flex-grow">
              © {currentYear} BeyondChats
            </div>

            <div className="w-full text-center text-gray-400 font-bold">
              Made with{' '}
              <span className="text-red-500 px-1 inline-block animate-pulse">❤️</span>
              {' '}by Prerna Mittal
            </div>

            <div className="w-full flex justify-center sm:justify-end items-center space-x-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;