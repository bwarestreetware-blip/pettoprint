import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app">
      <header className="topbar">
        <strong>Pettoprint Video Editor</strong>
        <span>Base44-ready</span>
      </header>
      <section className="workspace">
        <aside className="sidebar">
          <button>Media</button>
          <button>Text</button>
          <button>Audio</button>
          <button>Effects</button>
          <button>Transitions</button>
          <button>Captions</button>
        </aside>
        <section className="editor">
          <div className="preview">Video Preview</div>
          <div className="timeline">
            <div className="track">Video Track</div>
            <div className="track">Audio Track</div>
            <div className="track">Text / Captions</div>
          </div>
        </section>
        <aside className="inspector">
          <h3>Inspector</h3>
          <p>Select a clip to edit its properties.</p>
        </aside>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
