import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Chat from '../src/Chat'
import News from '../src/News'
import ErrorBoundary from '../src/ErrorBoundary';

export default function App() {
    return (
      <div style={{ padding: "0.5rem 1.5rem" }}>
        <h1>Welcome!</h1>
        <hr />
        <ErrorBoundary>
          <News />
        </ErrorBoundary>
        <hr />
        <ErrorBoundary>
          <Chat />
        </ErrorBoundary>
      </div>
    );
  }