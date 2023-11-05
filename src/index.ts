import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send({
        data: {
            tram_0_destination : 'dest0 from api',
            tram_0_arrival: '1 min',
            tram_1_destination : 'dest1 from api',
            tram_1_arrival: '2 mins',
            message: `it works`,
        }
    })
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});