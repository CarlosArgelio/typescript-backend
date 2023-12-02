import express, { Response, Request } from "express";

const diaryRouter = express.Router()

diaryRouter.get('/', (_req: Request, res: Response) => {
    res.send('Fetching all entry diaries')
});

diaryRouter.post('/', (_req: Request, res: Response) => {
    res.send('Saving a diary!')
})

export { diaryRouter };