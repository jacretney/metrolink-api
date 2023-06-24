import TfgmClient from "../data/TfgmApi/TfgmClient";
import TfgmAxiosClient from '../data/TfgmApi/TfgmAxiosClient';
import { useEffect, useState } from "react";

function TramTimetable() {
    const client = new TfgmClient(TfgmAxiosClient);

    const [response, setResponse] = useState({
        tram_0_destination: 'Loading...',
        tram_0_arrival: '',
        tram_1_destination: '',
        tram_1_arrival: '',
        message: '',
    });

    const fetchData = () => {
        client.fetchMetroLinkStopDetails(127967)
            .then(data => setResponse({
                tram_0_destination : data.Dest0,
                tram_0_arrival: `${data.Status0} in ${data.Wait0} mins.`,
                tram_1_destination : data.Dest1,
                tram_1_arrival: `${data.Status1} in ${data.Wait1} mins.`,
                message: `${data.MessageBoard}`
            }));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 5 * 1000);

        return () => clearInterval(interval);
    }, [client]);

  
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