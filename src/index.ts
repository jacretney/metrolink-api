import * as dotenv from 'dotenv'
dotenv.config()

import TfgmClient from "./Infrastructure/TfgmApi/TfgmClient";


const client = new TfgmClient();

const stop = client.fetchMetroLinkStopDetails(127967);

stop.then(data => console.log(data));