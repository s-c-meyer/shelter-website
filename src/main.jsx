import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import MainView from './components/main-view.jsx'
import Container from 'react-bootstrap/Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container fluid>
      <MainView />
    </Container>
  </React.StrictMode>,
)
