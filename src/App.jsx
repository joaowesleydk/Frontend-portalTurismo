import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from"./Pages/home"
import ServicePage from"./Pages/servicePage"
import ContactPage from "./Pages/contactPage"
import AboutPage from "./Pages/aboutPage"
import LoginPage from "./Pages/loginPage"
import RegisterPage from "./Pages/registerPage"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </Router>

  )
}

export default App;

