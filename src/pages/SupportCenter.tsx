
import React from 'react';
import { SupportHero } from '@/components/support/SupportHero';
import { SupportSearch } from '@/components/support/SupportSearch';
import { SupportCategories } from '@/components/support/SupportCategories';
import { SupportChat } from '@/components/support/SupportChat';

const SupportCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SupportHero />
      <SupportSearch />
      <SupportCategories />
      <SupportChat />
    </div>
  );
};

export default SupportCenter;
