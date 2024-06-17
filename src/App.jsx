import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProviderProduct } from './context/DataContext';
import Cart from './views/Cart';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Detail from './views/Detail';
import Footer from './components/Footer';

function App() {
   return (
      <>
         <ProviderProduct>
            <Router>
               <Navbar />
               <main>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/pizza/:id" element={<Detail />} />
                     <Route path="/carrito" element={<Cart />} />
                  </Routes>
               </main>
               <Footer />
            </Router>
         </ProviderProduct>
      </>
   );
}

export default App;
