import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import MetroLinkService from './TfgmApi/MetroLinkService';
import { log } from 'console';

const app: Express = express();
const port = process.env.PORT;

const metroLinkService = new MetroLinkService();

app.get('/stops/:id', async (req: Request, res: Response) => {
    const stopId = parseInt(req.params.id);
    const data = await metroLinkService.getStop(stopId);

    log(data);

    res.send({ data });
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});