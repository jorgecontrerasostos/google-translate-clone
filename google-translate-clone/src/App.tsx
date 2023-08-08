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
import { Container, Row, Col, Button } from 'react-bootstrap'

import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector />
        </Col>
        <Col>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector />
        </Col>
      </Row>
    </Container>
  )
}

export default App
