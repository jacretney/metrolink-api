import axios from 'axios';
import axiosTauriApiAdapter from 'axios-tauri-api-adapter';

export default axios.create({
    adapter: axiosTauriApiAdapter,
    baseURL: 'https://api.tfgm.com/odata',
    headers: {
        "Ocp-Apim-Subscription-Key": "90260e207c03479c913e54d1934d1542",
    }
})