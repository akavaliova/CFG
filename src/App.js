import './App.css';
// import Button from './components/Button';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Page1 from"./components/Page1" 
import Page2 from"./components/Page2" 
import Page3 from"./components/Page3"
// import Header from './components/Header'
// import ClassButton from './components/ClassButton';
// import Counter from './components/Counter';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<h1>Home Page</h1>} />
        <Route exact path="page1" element={<Page1 />} />
        <Route exact path="page2" element={<Page2 />} />
        <Route exact path="page3" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
            </ul>
        </div>
        </Router>
      {/* <header className="App-header">
        <h2 className="name">Hello, my name is Alena</h2>
        <h3 className="whereabout">I am from Warsaw</h3>
        <p id="hobby">I like cooking</p>
        <p className="book">My favourite book is "Tuesdays with Morrie"</p>
        <Button message='CLICK ME!!' />
      </header> */}
    </div>
  );
}
export default App;


// function App() {
//   const greetings='Good morning CFG and Me'
//   const handleClick = (x) => {
//     alert(`You have clicked me, so, ${x} to you!`)
//   }
//   return (
//     <div className="App">
//       <h1 className='main-header'>Hello and to our  react sessions!</h1>
//       <Counter/>
//       <Button greeting={greetings} label="Try Me" handleClick={handleClick}/>
//       <ClassButton/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;



