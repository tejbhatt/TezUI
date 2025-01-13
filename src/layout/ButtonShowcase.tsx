import React from 'react';
import Button from './../components/Button';

const ButtonShowcase: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-50">
      {/* Header */}
      <header className="w-full text-center bg-blue-500 text-white py-4">
        <h1 className="text-2xl font-bold">Button Showcase</h1>
        <p className="text-sm">Explore various button styles and variants</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-y-4 w-full max-w-md px-4 py-6 flex-grow">
        {/* Primary Button */}
        <Button variant="primary" size="md">
          Primary Button
        </Button>

        {/* Success Button */}
        <Button variant="success" size="lg">
          Success Button
        </Button>

        {/* Danger Button */}
        <Button variant="danger" size="sm">
          Danger Button
        </Button>

        {/* Loading Button */}
        <Button variant="info" size="md" loading>
          Info Button
        </Button>

        {/* Block Button */}
        <Button variant="warning" block className="w-full">
          Warning Block Button
        </Button>

        {/* Link Button */}
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <Button variant="link" size="sm">
            Link Button
          </Button>
        </a>

        {/* Disabled Button */}
        <Button variant="secondary" disabled>
          Disabled Button
        </Button>
      </main>

      {/* Footer */}
      <footer className="w-full text-center bg-gray-800 text-white py-4">
        <p className="text-sm">&copy; 2024 Button Showcase. All rights reserved.</p>
        <p className="text-xs">
          Crafted with <span className="text-red-500">&hearts;</span> By Tej Bhatt using React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default ButtonShowcase;
