import React from 'react'
import Form from 'react-bootstrap/Form'
import { SUPPORTED_LANGUAGES } from '../constants'

export const LanguageSelector = ({ onChange }) => {
  return (
    <Form.Select aria-label='Selecciona el idioma'>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => (
        <option key={key} value={key}>
          {language}
        </option>
      ))}
    </Form.Select>
  )
}
