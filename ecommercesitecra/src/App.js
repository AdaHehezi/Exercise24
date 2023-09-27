import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav/>
        <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
        <MyFooter/>
      </Router>
    </div>
  );
}

export default App;
