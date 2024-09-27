
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Modern from './components/Modern';
import Products from './components/Products';
import Footer from './components/Footer';
import { BrowseRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import User from './components/User';
import Cart from './components/Cart';
import Interior from './components/Interior';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Modern/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Testimonial' element={<Testimonial/>}/>
        <Route path='/Interior' element={<Interior/>}/>

      </Routes>
      </BrowserRouter>
       <Products/>
      <Footer/> 
      <Interior/>
      <Testimonial/>
    </div>
  );
}
export default App;


