import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  // --- REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL URLs ---
  const GITHUB_URL = "https://github.com/Okomane";
  const LINKEDIN_URL = "https://www.linkedin.com/in/obakeng-komane-384b7481/";
  const MAILTO_URL = "mailto:obakengkomane@gmail.com"; // Use mailto: for email
  // --------------------------------------------------------

  return (
    <footer className="py-8 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Obakeng. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {/* GitHub Icon Link */}
            <a
              href={GITHUB_URL} // Linked to GitHub URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            {/* LinkedIn Icon Link */}
            <a
              href={LINKEDIN_URL} // Linked to LinkedIn URL
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            {/* Email Icon Link */}
            <a
              href={MAILTO_URL} // Linked to Email (mailto:)
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}