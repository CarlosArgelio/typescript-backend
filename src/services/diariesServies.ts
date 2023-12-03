import { DiaryEntry, NonSesitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries
export const getEntriesWithoutSensitiveInfo = (): NonSesitiveInfoDiaryEntry[] => diaries
export const addEntry = (): undefined => undefined
