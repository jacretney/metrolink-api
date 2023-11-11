import WeatherApiAxiosClient from './WeatherApiAxiosClient';
import {WeatherAPIResponse} from "./Types/WeatherApiResponse";

class WeatherApiClient {
    client: typeof WeatherApiAxiosClient;

    constructor(axiosClient: typeof WeatherApiAxiosClient) {
        this.client = axiosClient;
    }

    async fetchWeather(): Promise<WeatherAPIResponse> {
        const q = 'M4 6LX';
        const aqi= 'no';
        const apiKey = process.env.WEATHER_API_KEY;

        const { data } = await this.client.get(`/current.json?key=${apiKey}&q=${q}&aqi=${aqi}`);

        return data;
    }
}

export default WeatherApiClient;