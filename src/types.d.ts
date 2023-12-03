export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'greate' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSesitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
export type NonSesitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
