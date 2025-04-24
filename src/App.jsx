import React from "react"; // React importieren
import "./App.css"; // CSS-Datei für das Styling importieren
import CountryList from "./components/CountryList"; // CountryList-Komponente importieren

// Hauptkomponente der Anwendung
const App = () => {
  return (
    <div className="App">
      {/* Header-Bereich */}
      <header>
        <h1>React mit Axios</h1>
      </header>
      {/* Hauptinhalt */}
      <main>
        {/* Einfügen der CountryList-Komponente */}
        <CountryList />
      </main>
    </div>
  );
};
export default App; // Komponente exportieren
