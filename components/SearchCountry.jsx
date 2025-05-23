import { useState } from "react";

export default function SearchCountry({ onAdd }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`/api/countries?name=${query}`);
      const data = await res.json();
      if (data?.name?.common) {
        setResult(data);
        setError("");
      } else {
        setResult(null);
        setError("Țara nu a fost găsită");
      }
    } catch (e) {
      setError("Eroare la căutare");
    }
  };

  const handleAdd = async () => {
    await fetch("/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    });

    setQuery("");
    setResult(null);
    onAdd?.(); // actualizează lista
  };

  return (
    <div className="p-4 mb-4 border border-gray-300 rounded shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-2">🔍 Caută o țară</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ex: France"
        className="border p-2 rounded mr-2 w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Caută
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {result && (
        <div className="mt-4 p-4 border rounded shadow-sm bg-gray-50">
          <h3 className="font-semibold text-lg">{result.name.common}</h3>
          <img src={result.flags.png} alt={result.name.common} className="w-24 mt-2" />
          <p>Capitală: {result.capital}</p>
          <p>Monedă: {Object.keys(result.currencies).join(", ")}</p>
          <p>Limbi: {Object.values(result.languages).join(", ")}</p>

          <button
            onClick={handleAdd}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Adaugă în wishlist
          </button>
        </div>
      )}
    </div>
  );
}
