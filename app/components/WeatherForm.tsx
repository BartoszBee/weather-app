"use client";

import { useState } from "react";
import WeatherResult from "./WeatherResult";
import { WeatherResultProps } from "@/types/types";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherResultProps["data"] | null>(null);
  const [error, setError] = useState("");

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setData(null);

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      if (!res.ok) throw new Error("Nie znaleziono miasta");
      const json = await res.json();
      console.log(json);
      setData(json);
      setCity("");
    } catch {
      setError("Nie udało się pobrać pogody...");
    }
  };

  return (
    <div className="space-y-6">
  <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Wpisz miasto..."
      className="border border-gray-300 px-1 py-0.5 rounded w-64 focus:outline-none focus:ring-1 focus:ring-indigo-600"
    />
    <button
      type="submit"
      disabled={!city.trim()}
      className="bg-indigo-600 text-white px-1 py-0.5 rounded hover:bg-indigo-500 cursor-pointer  transition"
    >
      Szukaj
    </button>
  </form>

  {error && <p className="text-red-600">{error}</p>}
  {data && <WeatherResult data={data} />}
</div>

  );
}
