import { BrowserRouter,Form,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Book from "./bookPage";
import FormPage from "./formPage";
import MenuPage from "./menuPage";
import LoginPage from "./Login";
import SignUpPage from "./signUp";

function App() {
  return(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route index element={<LoginPage/>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="/menu" element={<MenuPage/>}/>
    </Routes>
    </BrowserRouter>
    
  </>
    
  );
}

export default App
