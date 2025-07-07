import { WeatherResultProps } from "@/types/types";

export default function WeatherResult({ data }: WeatherResultProps) {
  const condition = data.current_condition[0];
  const city = data.nearest_area[0].areaName[0].value;

  return (
    <div className="mt-6 p-6 rounded-xl shadow-md bg-amber-300  text-center space-y-2">
      <h2 className="text-2xl font-bold text-indigo-600 ">
        Aktualna pogoda dla {city}
      </h2>
      <p className="text-4xl font-semibold text-gray-700">
        {condition.temp_C}°C
      </p>

      <p className="text-sm text-gray-700 ">
        💨 Wiatr: {condition.windspeedKmph} km/h | 💧 Wilgotność:{" "}
        {condition.humidity}%
      </p>
    </div>
  );
}
