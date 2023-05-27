import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

import metroLinkStopResponse from './fixtures/metro-link-stop-200.json';
import allMetroLinkStopsResponse from './fixtures/all-stops-paginated-200.json';

import TfgmClient from "../../../src/Infrastructure/TfgmApi/TfgmClient";


describe('A TfgmClient', () => {
    let client: TfgmClient;
    let apiMock: MockAdapter;

    beforeEach(() => {
        client = new TfgmClient();
        apiMock = new MockAdapter(axios);
    })

    test('should fetch a tram stop', async () => { 
        apiMock.onGet('https://api.tfgm.com/odata/MetroLinks(12345)').reply(200, metroLinkStopResponse);

        const stop = await client.fetchMetroLinkStopDetails(12345);

        expect(stop.Line).toBe('East Manchester');
        expect(stop.StationLocation).toBe('New Islington');
    })

    test('should fetch all tram stops', async () => { 
        apiMock.onGet('https://api.tfgm.com/odata/MetroLinks').reply(200, allMetroLinkStopsResponse);

        const stops = await client.fetchAllMetroLinkStopDetails();

        expect(stops).toHaveLength(10);
    })
})