import NavigationBar from "./navigation-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Resources from "./resources";
import Index from ".";
import Board from "./board-of-directors";
import Contact from "./contact-page";
import Donate from "./donate-page";


export default function MainView () {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Row>
          <Routes>
            <Route 
              path="/"
              element={<Index />}
            />
            <Route 
              path="/resources"
              element={<Resources />}
            />
            <Route 
              path="/board"
              element={<Board />}
            />
            <Route 
              path="/contact"
              element={<Contact />}
            />
            <Route 
              path="/donate"
              element={<Donate />}
            />
          </Routes>
        </Row>
      </BrowserRouter>
    </>
  )
}