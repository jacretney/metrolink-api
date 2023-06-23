import React from 'react'

function TramTimetable() {
    const response = {
        station: 'New Islington',
        tram_0_destination: 'Eccles via MediaCityUK',
        tram_0_arrival: '1 minute',
        tram_1_destination: 'Eccles via MediaCityUK',
        tram_1_arrival: '12 minutes',
        message: 'There are a number of events taking place this week across Manchester. Please plan your journey in advance and be aware that services may be busier than normal.'
    }
  
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

            <div className="row service-message">
                <marquee>{ response.message }</marquee>
            </div>
        </div>
    )
}

export default TramTimetable