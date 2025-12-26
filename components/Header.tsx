"use client";

export function Header() {
  return (
    <header className="bg-primary-900/50 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-900">S</span>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Sports <span className="text-secondary">App</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-secondary transition-colors">
              Home
            </a>
            <a href="/dashboard" className="text-white hover:text-secondary transition-colors">
              Dashboard
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
