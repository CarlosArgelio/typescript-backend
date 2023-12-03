import express, { Response, Request } from 'express'
import * as diaryServices from '../services/diariesServies'

const diaryRouter = express.Router()

diaryRouter.get('/', (_req: Request, res: Response) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

diaryRouter.get('/:id', (_req: Request, res: Response) => {
  const id = _req.params.id
  const diary = diaryServices.findById(+id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

diaryRouter.post('/', (_req: Request, res: Response) => {
  const { date, weather, visibility, comment } = _req.body
  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment
  })
  res.send(newDiaryEntry)
})

export { diaryRouter }
