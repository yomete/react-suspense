import React, { Suspense } from "react";
import "./App.css";

const Shows = React.lazy(() => import("./components/Shows"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <Shows />
      </Suspense>
    </div>
  );
}

export default App;
