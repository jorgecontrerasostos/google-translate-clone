/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/space-before-function-paren */

import { useReducer } from 'react'
import {
  type Language,
  type Action,
  type State,
  type FromLanguage
} from '../types'

// 1. Create initial State
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      toText: action.payload
    }
  }
  return state
}

export function useStore() {
  // 3. Use reducer Hook
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  const interchangeLanguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' })

  const setFromLanguage = (payload: FromLanguage) =>
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })

  const setToLanguage = (payload: Language) => ({
    type: 'SET_TO_LANGUAGE',
    payload
  })

  const setFromText = (payload: string) => ({ type: 'SET_FROM_TEXT', payload })

  const setResult = (payload: string) => ({ type: 'SET_RESULT', payload })

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
