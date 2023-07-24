/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/space-before-function-paren */

import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { type Action, type State } from './types'

// 1. Create initial State
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload,
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload,
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: '',
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      toText: action.payload,
    }
  }
  return state
}

function App() {
  // 3. Use reducer Hook
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)
  console.log({ fromLanguage })

  return (
    <>
      <h1>Google Translate</h1>
      <button
        onClick={() => dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })}
      >
        Cambiar a Español
      </button>
      {fromLanguage}
    </>
  )
}

export default App
