import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<Shopcategory  category="mens"/>}></Route>
          <Route path='/womens' element={<Shopcategory category="womens" />}></Route>
          <Route path='/kids' element={<Shopcategory category="kids" />}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path=':productId' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/loginsignup' element={<LoginSignup/>}></Route>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
