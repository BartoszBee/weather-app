"use client";

import { useState } from "react";
import WeatherResult from "./WeatherResult";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setData(null);

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      if (!res.ok) throw new Error("Nie znaleziono miasta");
      const json = await res.json();
      setData(json);
    } catch {
      setError("Nie udało się pobrać pogody");
    }
  };

  return (
    <div>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Wpisz miasto..."
        />
        <button type="submit">Szukaj</button>
      </form>
      {error && <p>{error}</p>}
      {data && <WeatherResult data={data} />}
    </div>
  );
}
