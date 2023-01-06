import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login/Login'
import useToken from './useToken';
 
function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
