import TfgmClient from "../data/TfgmApi/TfgmClient";
import TfgmAxiosClient from '../data/TfgmApi/TfgmAxiosClient';
import { useState } from "react";

function TramTimetable() {
    const client = new TfgmClient(TfgmAxiosClient);

    const [response, setResponse] = useState({});
  
    setInterval(() => {
        const stop = client.fetchMetroLinkStopDetails(127967);

        stop.then(data => setResponse({
            'station': data.StationLocation,
            'tram_0_destination' : data.Dest0,
            'tram_0_arrival': `${data.Status0} in ${data.Wait0} mins.`,
            'tram_1_destination' : data.Dest1,
            'tram_1_arrival': `${data.Status1} in ${data.Wait1} mins.`,
            'message': `${data.MessageBoard}`
        }));
    }, 15 * 1000);
  
    return (
        <div className="table">
            <div className="row">
                <p>{ response.tram_0_destination }</p>
                <p>{ response.tram_0_arrival }</p>
            </div>

            <div className="row">
                <p>{ response.tram_1_destination }</p>
                <p>{ response.tram_1_arrival }</p>
            </div>

            <div className="row">
                <p className="text-center mt-4">{ response.message }</p>
            </div>
        </div>
    )
}

export default TramTimetable