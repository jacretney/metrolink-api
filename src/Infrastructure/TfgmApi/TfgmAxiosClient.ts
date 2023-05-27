import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.tfgm.com/odata',
    headers: {
        "Ocp-Apim-Subscription-Key": process.env.TFGM_API_KEY,
    }
});