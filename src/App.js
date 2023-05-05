import './App.css';
// import Button from './components/Button';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home  from"./components/Home" 
import Contact from"./components/Contact" 
import Order from"./components/Order"


function App() {
  return(
    <>
    <Router>
      <div className="list">
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="Contact">Contact Page</Link></li>
        <li><Link to="Order">Order Page</Link></li>
        </ul>
      </div>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;






