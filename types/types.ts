


export type WeatherResultProps = {
  data: {
    current_condition: {
      temp_C: string;
      weatherDesc: { value: string }[];
      humidity: string;
      windspeedKmph: string;
    }[];
    nearest_area: {
      areaName: {
        value: string;
      }[];
    }[];
  };
};
