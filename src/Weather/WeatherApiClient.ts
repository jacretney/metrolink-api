import WeatherApiAxiosClient from './WeatherApiAxiosClient';
import {WeatherAPIResponse} from "./Types/WeatherApiResponse";
import {ForecastResponse} from "./Types/Forecast";
import {AxiosResponse} from "axios";

class WeatherApiClient {
    client: typeof WeatherApiAxiosClient;

    constructor(axiosClient: typeof WeatherApiAxiosClient) {
        this.client = axiosClient;
    }

    async fetchWeather(): Promise<ForecastResponse> {
        const q = 'M15 4NY';
        const aqi = 'no';
        const apiKey = process.env.WEATHER_API_KEY;

        const response = await this.client.get(`/forecast.json?key=${apiKey}&q=${q}&aqi=${aqi}`);

        return response.data;
    }
}

export default WeatherApiClient;