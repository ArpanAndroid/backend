import React from 'react';
import { useContent } from './hooks/useContent';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { content, loading, error } = useContent();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'var(--color-primary)',
        fontSize: '1.5rem'
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error loading content</div>;
  }

  return (
    <div className="App">
      <Header data={content.header} />
      <main>
        <Hero data={content.hero} />
        <Features data={content.features} />
      </main>
      <Footer data={content.footer} />
    </div>
  );
}

export default App;
