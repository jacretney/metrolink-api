import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import MetroLinkService from './TfgmApi/MetroLinkService';
import { log } from 'console';

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

const metroLinkService = new MetroLinkService();

app.get('/stops/:id', async (req: Request, res: Response) => {
    const stopId = parseInt(req.params.id);

    const data = await metroLinkService.getStop(stopId);

    res.send({ data });
});

app.post('/stops/search', async (req: Request, res: Response) => {
    const data = await metroLinkService.search({
        name: req.body.name,
        direction: req.body.direction,
    });

    if (!data) {
        res.status(404).send({ error: 'Not found' });
        return;
    }

    res.send({ data });
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});