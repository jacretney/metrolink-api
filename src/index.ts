import * as dotenv from 'dotenv'
dotenv.config()

import TfgmClient from "./Infrastructure/TfgmApi/TfgmClient";
import TfgmAxiosClient from './Infrastructure/TfgmApi/TfgmAxiosClient';

const client = new TfgmClient(TfgmAxiosClient);

const stop = client.fetchMetroLinkStopDetails(127967);

stop.then(data => console.log(data));