import { useState } from 'react';
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    console.log('Theme toggled to:', !isDark ? 'dark' : 'light');
  };

  return (
    <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #22c55e, #16a34a)' }}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <div className="pt-32 text-center text-white">
        <h1>Scroll to test navigation behavior</h1>
      </div>
    </div>
  );
}