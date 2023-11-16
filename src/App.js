
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product Listing Component</h1>} />
        <Route path='/add' element={<h1>add product component</h1>} />
        <Route path='/update' element={<h1>update product </h1>} />
        <Route path='/logout' element={<h1>logout</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter> 
      <Footer />  
      </div>
  );
}

export default App;
