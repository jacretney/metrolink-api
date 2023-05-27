import axios from 'axios';
import { MetroLinkStop } from './MetroLinkStop';

const baseUrl = 'https://api.tfgm.com/odata';

class TfgmClient {
    async fetchAllMetroLinkStopDetails(): Promise<MetroLinkStop[]> {
        const { data } = await axios
            .get(`${baseUrl}/MetroLinks`, {
                headers: {

                }
            });

        return data.value;
    }

    async fetchMetroLinkStopDetails(id: number): Promise<MetroLinkStop> {
        const { data } = await axios
            .get(`${baseUrl}/MetroLinks(${id})`, {
                headers: {

                }
            });

        return data;
    }
}

export default TfgmClient;