
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact'
import Products from './Components/Products/Products'
import SingleProduct from './Components/SingleProduct/SingleProduct'
import ErrorPage from './Components/ErrorPage'
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
