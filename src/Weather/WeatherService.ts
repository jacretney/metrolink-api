import WeatherApiClient from "./WeatherApiClient";
import WeatherApiAxiosClient from "./WeatherApiAxiosClient";

import {Weather} from "./Types/Weather";
import {Hour} from "./Types/Forecast";

class WeatherService {
    client: WeatherApiClient;

    constructor() {
        this.client = new WeatherApiClient(WeatherApiAxiosClient);
    }

    async getWeather(date: string): Promise<Weather> {
        const response = await this.client.fetchWeather();

        const hourlyForecast: Hour | undefined = response.forecast.forecastday[0].hour.find(hour => {
            return hour.time === date;
        });

        if (!hourlyForecast) {
            throw new Error('No hourly forecast found');
        }

        return {
            time: hourlyForecast.time,
            temperature: hourlyForecast.temp_c,
            condition: hourlyForecast.condition,
            rain_chance: hourlyForecast.chance_of_rain,
        }
    }
}

export default WeatherService;