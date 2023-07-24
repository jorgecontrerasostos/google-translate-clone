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
  | { type: 'SET_FROM_LANGUAGE', payload: string }
  // prettier-ignore
  | { type: 'SET_RESULT', payload: string }
