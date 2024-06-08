
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import Shop from './Pages/Shop';




function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<shopCategory category="mens"/>}/>
        <Route path='/womens' element={<shopCategory category="Womens"/>}/>
        <Route path='/kids' element={<shopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginSignup/>}/>
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
