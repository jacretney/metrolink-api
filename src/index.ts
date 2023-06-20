import * as dotenv from 'dotenv'
dotenv.config()

import TfgmClient from "./Infrastructure/TfgmApi/TfgmClient";
import TfgmAxiosClient from './Infrastructure/TfgmApi/TfgmAxiosClient';

const client = new TfgmClient(TfgmAxiosClient);

const stop = client.fetchMetroLinkStopDetails(127967);

stop.then(data => console.log({
    'station': data.StationLocation,
    'tram_0_destination' : data.Dest0,
    'tram_0_arrival': `${data.Status0} in ${data.Wait0} minutes.`,
    'tram_1_destination' : data.Dest1,
    'tram_1_arrival': `${data.Status1} in ${data.Wait1} minutes.`,
    'message': `${data.MessageBoard}`
}));