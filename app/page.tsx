import WeatherForm from "@/app/components/WeatherForm";

export default function WeatherAppPage() {
  return (
    <main>
      <h1>Weather App</h1>
      <p>
        Sprawdź aktualną pogodę w wybranym mieście. Dane pobierane z darmowego API <code>wttr.in</code>.
      </p>
      <WeatherForm />
    </main>
  );
}
