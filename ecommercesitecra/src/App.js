import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
