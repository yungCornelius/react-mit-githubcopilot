import React, { useState, useEffect } from "react"; // React-Hooks importieren
import axios from "axios"; // Axios für HTTP-Anfragen

// Funktionale Komponente für die Anzeige der Länder
const CountryList = () => {
  // State für die Liste der Länder
  const [countries, setCountries] = useState([]); // Initial leer
  // State für den Ladezustand
  const [loading, setLoading] = useState(true); // Initial auf "true"
  // State für Fehler
  const [error, setError] = useState(null); // Initial kein Fehler
  // State für die Suchanfrage
  const [searchQuery, setSearchQuery] = useState(""); // Initial leer

  // useEffect wird ausgeführt, wenn die Komponente geladen wird
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Abrufen der Länderinformationen von der API
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data); // Speichern der Daten im State
        setLoading(false); // Ladezustand auf "false" setzen
      } catch (err) {
        setError("Fehler beim Abrufen der Daten."); // Fehler speichern
        setLoading(false); // Ladezustand auf "false" setzen
      }
    };

    fetchCountries(); // Funktion aufrufen
  }, []); // Leeres Array bedeutet, dass der Effekt nur einmal ausgeführt wird

  // Wenn die Daten noch geladen werden, zeige eine Ladeanzeige
  if (loading) return <p>Daten werden geladen...</p>;
  // Wenn ein Fehler auftritt, zeige die Fehlermeldung
  if (error) return <p>{error}</p>;

  // Filtere die Länder basierend auf der Suchanfrage
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Wenn die Daten erfolgreich geladen wurden, zeige die Liste der Länder
  return (
    <div>
      <h1>Länderinformationen</h1>
      {/* Suchfeld */}
      <input
        type="text"
        placeholder="Nach Land suchen..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Suchanfrage aktualisieren
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      />
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            {/* Zeige den Namen und die Hauptstadt des Landes */}
            <strong>{country.name.common}</strong> -{" "}
            {country.capital ? country.capital[0] : "Keine Hauptstadt"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList; // Komponente exportieren