import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductForm from './pages/ProductForm';
import Admin from './pages/Admin';

const footerStyle={
  marginTop:"auto",
}

const pageStyle={
  minHeight:"100vh", 
}
export default function App() {
  return (
    <div className="App" style = {{backgroundColor: "#FBF4F4"}}>
      <div style={pageStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductForm />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
        <div style={footerStyle}>
        <Footer />
        </div>
    </div>
  );
}

