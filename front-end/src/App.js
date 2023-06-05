import './App.css';
import Home from '../src/Components/Screens/Home';
import Category from '../src/Components/Screens/Category'
import Single from '../src/Components/Screens/Single'
import Error404 from '../src/Components/Screens/Error404'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
              <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/category" element={<Category/>} />
              <Route path="/single" element={<Single/>} />
              <Route path="*" element={<Error404/>} />
              </Routes>      
    </BrowserRouter>
      
  );
}

export default App;
