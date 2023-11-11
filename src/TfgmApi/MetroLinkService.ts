import TfgmClient from "./TfgmClient"
import TfgmAxiosClient from "./TfgmAxiosClient"
import { TramStop } from "./Types/TramStop";
import { MetroLinkStop } from "./Types/MetroLinkStop";
import { Tram } from "./Types/Tram";

class MetroLinkService {
    client: TfgmClient;

    constructor() {
        this.client = new TfgmClient(TfgmAxiosClient)
    }

    async search({ name, direction }: { name: string, direction: string }): Promise<TramStop|null> {
        const stops = await this.client.fetchAllMetroLinkStopDetails();

        const stop = stops.find((stop) => {
            return stop.StationLocation.toLowerCase() === name.toLowerCase() &&
                stop.Direction.toLowerCase() === direction.toLowerCase();
        });

        if (!stop) {
            return null;
        }

        return {
            id: stop.Id,
            location: stop.StationLocation,
            message: this._getMessage(stop),
            trams: this._getTrams(stop),
        }
    }

    async getStop(id: number): Promise<TramStop> {
        const response = await this.client.fetchMetroLinkStopDetails(id);

        return {
            id,
            location: response.StationLocation,
            message: this._getMessage(response),
            trams: this._getTrams(response),
        }
    }

    /**
     * This is minging but the API we're dealing with is minging...
     * @param {MetroLinkStop} response 
     * @returns 
     */
    _getTrams(response: MetroLinkStop): Array<Tram> {
        const trams = [];

        if (response.Dest0 !== '') {
            trams.push({
                destination: response.Dest0,
                carriages: response.Carriages0,
                status: response.Status0,
                wait: parseInt(response.Wait0),
            })
        }

        if (response.Dest1 !== '') {
            trams.push({
                destination: response.Dest1,
                carriages: response.Carriages1,
                status: response.Status1,
                wait: parseInt(response.Wait1),
            })
        }

        if (response.Dest2 !== '') {
            trams.push({
                destination: response.Dest2,
                carriages: response.Carriages2,
                status: response.Status2,
                wait: parseInt(response.Wait2),
            })
        }

        return trams;
    }

    _getMessage(response: MetroLinkStop): string|null {
        const message = response.MessageBoard;

        if (message === '<no message>') {
            return null;
        }
        
        return response.MessageBoard;
    }
}

export default MetroLinkService;