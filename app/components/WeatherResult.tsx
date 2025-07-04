import { WeatherResultProps } from "@/types/types";

export default function WeatherResult({ data }: WeatherResultProps) {
  const condition = data.current_condition[0];
  const city = data.nearest_area[0].areaName[0].value;

  return (
    <div className="mt-6 p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 text-center space-y-2">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Aktualna pogoda dla {city}
      </h2>
      <p className="text-4xl font-semibold">{condition.temp_C}°C</p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {condition.weatherDesc[0].value}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        💨 Wiatr: {condition.windspeedKmph} km/h | 💧 Wilgotność: {condition.humidity}%
      </p>
    </div>
  );
}
