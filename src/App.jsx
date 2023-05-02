import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import DisplayData from "./components/DisplayData";
import AboutUs from "./components/AboutUs";
function App() {
  
  return(
  // <>
  // <Home/>
  //   </>
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="admin" element={<DisplayData />} />
          <Route path="aboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
