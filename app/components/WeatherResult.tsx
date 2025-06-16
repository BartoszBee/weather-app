import { WheaterResultProps } from "@/types/types";

export default function WeatherResult({data}:WheaterResultProps){
    const condition = data.current_condition[0];

    return (
        <div>
            <h2>Aktualna pogoda</h2>
            <p>{condition.temp_C}°C</p>
            <p>{condition.weatherDesc[0].value}</p>
            <p>Wiatr: {condition.windspeedKmph} km/h | Wilgotność: {condition.humidity} %</p>
        </div>
    )

}
