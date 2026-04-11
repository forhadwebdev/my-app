export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 text-center">
      <div className="container mx-auto px-6">
        <p>&copy; {currentYear} All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          {/* Social Links Placeholder */}
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
