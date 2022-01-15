import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Protected from './components/Protected';
import ProductList from './components/ProductList';
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/" element={<Protected cmp={ProductList} />} />
              <Route path="/add" element={<Protected cmp={AddProduct} />}/>
              <Route path="/search" element={<Protected cmp={SearchProduct} />}/>
              <Route path="/update/:id" element={<Protected cmp={UpdateProduct} />}/>
              <Route path="/" element={<Register />} />
            </Routes>
          </div>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
