/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import { PageId } from './types';

// Import Pages
import VillageInfo from './pages/VillageInfo';
import Innovation from './pages/Innovation';
import Wisdom from './pages/Wisdom';
import Products from './pages/Products';
import Attractions from './pages/Attractions';
import CommunityMap from './pages/CommunityMap';
import Calendar from './pages/Calendar';
import News from './pages/News';
import Report from './pages/Report';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('info');

  const renderPage = () => {
    switch (activePage) {
      case 'info': return <VillageInfo />;
      case 'innovation': return <Innovation />;
      case 'wisdom': return <Wisdom />;
      case 'products': return <Products />;
      case 'attractions': return <Attractions />;
      case 'map': return <CommunityMap />;
      case 'calendar': return <Calendar />;
      case 'news': return <News />;
      case 'report': return <Report />;
      case 'contact': return <Contact />;
      default: return <VillageInfo />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
}
