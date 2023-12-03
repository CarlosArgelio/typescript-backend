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

diaryRouter.post('/', (req: Request, res: Response) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.send(addedDiaryEntry)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

export { diaryRouter }
