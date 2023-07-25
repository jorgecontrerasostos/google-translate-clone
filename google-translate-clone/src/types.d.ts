import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  // prettier-ignore
  | { type: 'SET_FROM_LANGUAGE', payload: string }
  | { type: 'INTERCHANGE_LANGUAGES' }
  // prettier-ignore
  | { type: 'SET_TO_LANGUAGE', payload: string }
  // prettier-ignore
  | { type: 'SET_FROM_TEXT', payload: string }
  // prettier-ignore
  | { type: 'SET_RESULT', payload: string }
