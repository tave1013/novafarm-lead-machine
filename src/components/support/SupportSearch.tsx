
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export const SupportSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="max-w-4xl mx-auto px-6">
        <form onSubmit={handleSearch} className="relative">
          <div className={`relative transition-all duration-300 ${
            isSearchFocused ? 'transform scale-105' : ''
          }`}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Search guides or keywords..."
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#078147]/20 focus:border-[#078147] transition-all duration-300 text-gray-800 placeholder-gray-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </form>

        {searchQuery && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              Searching for "<strong>{searchQuery}</strong>"... 
              <span className="text-blue-600 ml-2">Feature coming soon!</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
