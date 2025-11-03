'use client';

import { useLanguage } from '@/contexts/language-context';
import { useState, useEffect } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-1">
        <button className="px-2 py-1 text-xs border rounded">VI</button>
        <button className="px-2 py-1 text-xs border rounded">EN</button>
      </div>
    );
  }

  return (
    <div className="flex gap-1">
      <button
        onClick={() => setLanguage('vi')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          language === 'vi' 
            ? 'bg-orange-500 text-white' 
            : 'border border-gray-300 hover:bg-gray-50'
        }`}
      >
        VI
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          language === 'en' 
            ? 'bg-orange-500 text-white' 
            : 'border border-gray-300 hover:bg-gray-50'
        }`}
      >
        EN
      </button>
    </div>
  );
}