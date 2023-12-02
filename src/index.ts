import express from 'express';
import { Request, Response } from 'express';
import { diaryRouter } from './routes/diaries';

const app = express()

app.use(express.json()) //middleware that used tranforms param req.body to type json

const PORT = 3000;

app.get('/ping', (_req: Request, res: Response) => {
    console.log('someone pinges her!!');
    res.send('ping')
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log('listen project port', PORT);
});