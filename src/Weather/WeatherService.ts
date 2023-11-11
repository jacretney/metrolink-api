import WeatherApiClient from "./WeatherApiClient";
import WeatherApiAxiosClient from "./WeatherApiAxiosClient";
import {Weather} from "./Types/Weather";

class WeatherService {
    client: WeatherApiClient;

    constructor() {
        this.client = new WeatherApiClient(WeatherApiAxiosClient);
    }

    async getWeather(): Promise<Weather> {
        const response = await this.client.fetchWeather();

        return {
            temperature: response.current.temp_c,
            condition: response.current.condition,
        }
    }
}

export default WeatherService;