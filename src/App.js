
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element = {<Layout/>} >
  <Route index element ={<Home />} />
  <Route path='about' element = {< About/>}/>
  <Route path='contact' element = {<Contact/>}/>
  <Route path='wishlist' element = {<Wishlist/>}/>
  </Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
