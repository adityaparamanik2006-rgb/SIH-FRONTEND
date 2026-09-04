import React from 'react';
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stoke ="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"{...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
     <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#cbd5e1] border-t border-[#1e293b] py-12 px-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-6 md:mb-0">
          <div className="text-white font-bold text-lg mb-2">ChallengeHub</div>
          <p className="text-sm text-[#cbd5e1]">Collaborative Disaster Management Platform</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#how-it-works" className="hover:text-[#0ea5e9] transition-colors">How It Works</a></li>
            <li><a href="#challenges" className="hover:text-[#0ea5e9] transition-colors">Browse Challenges</a></li>
            <li><a href="#metrics" className="hover:text-[#0ea5e9] transition-colors">Impact Metrics</a></li>
            <li><a href="#about" className="hover:text-[#0ea5e9] transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">More</h3>
          <ul className="space-y-3 text-sm mb-6">
            <li><a href="#privacy" className="hover:text-[#0ea5e9] transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-[#0ea5e9] transition-colors">Terms of Service</a></li>
            <li><a href="#contact" className="hover:text-[#0ea5e9] transition-colors">Contact Us</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0ea5e9] transition-colors">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#0ea5e9] transition-colors">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#0ea5e9] transition-colors">
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#1e293b] text-center text-xs text-[#64748b]">
        © 2026 ChallengeHub. All rights reserved. | Powered by Government of Jharkhand
      </div>
    </footer>
  );
}
