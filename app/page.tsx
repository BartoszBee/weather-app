import WeatherForm from "@/app/components/WeatherForm";
import { CloudSun } from "lucide-react";

export default function WeatherAppPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6 text-center">
      <h1 className="text-3xl font-bold text-gray-700">
        Weather App{" "}
        <CloudSun className="inline-block w-9 h-9 align-baseline text-amber-300" />
      </h1>
      <p className="text-indigo-600">
        Sprawdź aktualną pogodę w wybranym mieście. Dane pobierane z darmowego
        API
        <code className="bg-amber-300 px-1 py-0.5 rounded ml-2">wttr.in</code>
      </p>
      <WeatherForm />
    </main>
  );
}
