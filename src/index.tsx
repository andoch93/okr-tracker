import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from '@components/Home';
import { Header } from '@components/Header';
import { About } from '@components/About';
import { Feature } from '@components/Feature';
import { InfoSection } from '@components/InfoSection';

export function App(): React.ReactElement {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Feature />
      <InfoSection />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
