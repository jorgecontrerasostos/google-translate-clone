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

// 1. Create initial State
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

// 2. Create a reducer
function reducer(state, action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload,
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload,
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: '',
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      toText: payload,
    }
  }
  return state
}

function App() {
  // 3. Use reducer Hook
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Google Translate</h1>
    </>
  )
}

export default App
