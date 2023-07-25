/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/space-before-function-paren */

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useStore } from './hooks/useStore'

function App() {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => setFromLanguage('es')}>Cambiar a Español</button>
      {fromLanguage}
    </>
  )
}

export default App
