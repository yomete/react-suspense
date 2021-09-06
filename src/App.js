import React, { Suspense } from "react";

import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const Shows = React.lazy(() => import("./components/Shows"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <ErrorBoundary fallback={<p>Could not fetch TV shows.</p>}>
        <Suspense fallback={<p>loading...</p>}>
          <Shows />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
