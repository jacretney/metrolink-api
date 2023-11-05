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

    async getStop(id: number): Promise<TramStop> {
        const response = await this.client.fetchMetroLinkStopDetails(id);

        return {
            id,
            location: response.StationLocation,
            message: this._getMessage(response),
            trams: this._getTrams(response),
        }
    }

    _getTrams(response: MetroLinkStop): Array<Tram> {
        const tramKeys = ['Dest0', 'Dest1', 'Dest2'];
        const tramCount = Object.keys(response).reduce((count, key) => {
            if (tramKeys.includes(key)) {
                return count + 1;
            }

            return count;
        }, 0);

        const trams = [];

        if (tramCount > 0) {
            trams.push({
                destination: response.Dest0,
                carriages: response.Carriages0,
                status: response.Status0,
                wait: parseInt(response.Wait0),
            })
        }

        if (tramCount > 1) {
            trams.push({
                destination: response.Dest1,
                carriages: response.Carriages1,
                status: response.Status1,
                wait: parseInt(response.Wait1),
            })
        }

        if (tramCount > 2) {
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